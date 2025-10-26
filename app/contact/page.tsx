'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black/70 to-royal-black z-10" />
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-primary mb-4">Contact Us</h1>
            <p className="text-royal-cream/90 text-lg max-w-2xl mx-auto px-4">
              We'd love to hear from you. Reserve your table or get in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding bg-royal-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-secondary mb-6">Get in Touch</h2>
                <p className="text-royal-cream/80 leading-relaxed mb-8">
                  Have a question or ready to make a reservation? We're here to help make your
                  dining experience unforgettable.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-gold to-nepali-crimson rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiMapPin className="w-6 h-6 text-royal-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-gold mb-1">Location</h3>
                    <p className="text-royal-cream/80">
                      Thamel, Kathmandu 44600<br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-gold to-nepali-crimson rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiPhone className="w-6 h-6 text-royal-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-gold mb-1">Phone</h3>
                    <a
                      href="tel:+9771234567890"
                      className="text-royal-cream/80 hover:text-royal-gold transition-colors"
                    >
                      +977 1-234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-gold to-nepali-crimson rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiMail className="w-6 h-6 text-royal-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-gold mb-1">Email</h3>
                    <a
                      href="mailto:info@himalayanpizza.com"
                      className="text-royal-cream/80 hover:text-royal-gold transition-colors"
                    >
                      info@himalayanpizza.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-gold to-nepali-crimson rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiClock className="w-6 h-6 text-royal-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-gold mb-2">Opening Hours</h3>
                    <div className="text-royal-cream/80 space-y-1 text-sm">
                      <p className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium ml-4">11:00 - 23:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium ml-4">10:00 - 00:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium ml-4">10:00 - 23:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card-luxury"
            >
              <h2 className="font-serif text-2xl font-bold text-royal-gold mb-6">
                Make a Reservation
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-600/20 border border-green-600 text-green-400 p-4 rounded-lg mb-6"
                >
                  Thank you! Your reservation request has been received. We'll contact you shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-royal-cream/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-royal-cream/80 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                      placeholder="+977 98XXXXXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-royal-cream/80 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream focus:outline-none focus:border-royal-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-royal-cream/80 mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream focus:outline-none focus:border-royal-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream focus:outline-none focus:border-royal-gold transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors resize-none"
                    placeholder="Any dietary restrictions or special occasions?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loader" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Submit Reservation
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-b from-royal-darkred to-royal-black pattern-nepali">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="heading-secondary mb-4">Find Us</h2>
            <p className="text-royal-cream/80">
              Located in the heart of Thamel, Kathmandu's vibrant tourist district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden border-2 border-royal-gold/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0766!2d85.31072!3d27.71547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdefffffff%3A0xd06d3bbed6d3a9a3!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Himalayan Pizza Palace Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
