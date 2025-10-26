'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiAward, FiClock, FiHeart } from 'react-icons/fi';
import { menuItems } from '@/lib/menuData';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredItems = menuItems.filter(item =>
    ['pizza-2', 'pasta-1', 'app-2'].includes(item.id)
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-royal-black/70 via-royal-black/50 to-royal-black z-10" />
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80"
            alt="Delicious Italian Pizza"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-6xl mb-6 animate-float"
            >
              🍕
            </motion.div>

            <h1 className="heading-primary mb-6">
              Himalayan Pizza Palace
            </h1>

            <p className="text-xl md:text-2xl text-royal-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where Italian tradition meets Himalayan soul. Experience authentic cuisine crafted with passion and served with the warmth of Nepali hospitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/menu" className="btn-primary group">
                Explore Our Menu
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-royal-gold rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-royal-gold rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-royal-black to-royal-darkred pattern-nepali">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Why Choose Us</h2>
            <p className="text-royal-cream/80 text-lg max-w-2xl mx-auto">
              A perfect fusion of Italian craftsmanship and Himalayan hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiAward,
                title: 'Premium Quality',
                description: 'Only the finest imported Italian ingredients combined with fresh local produce',
              },
              {
                icon: FiClock,
                title: 'Traditional Methods',
                description: 'Wood-fired ovens and time-honored recipes passed down through generations',
              },
              {
                icon: FiHeart,
                title: 'Made with Love',
                description: 'Every dish is crafted with passion and served with genuine Nepali warmth',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-luxury text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-royal-gold to-nepali-crimson rounded-full group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-royal-black" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-royal-gold mb-3">
                  {feature.title}
                </h3>
                <p className="text-royal-cream/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="section-padding bg-royal-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Signature Dishes</h2>
            <p className="text-royal-cream/80 text-lg max-w-2xl mx-auto">
              Discover our most beloved creations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="card-luxury group cursor-pointer"
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-black/80 to-transparent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-royal-gold mb-2">
                  {item.name}
                </h3>
                <p className="text-royal-cream/70 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-royal-gold font-bold text-xl">
                    NPR {item.price}
                  </span>
                  <Link
                    href="/menu"
                    className="text-royal-cream hover:text-royal-gold transition-colors text-sm font-medium group"
                  >
                    View Menu
                    <FiArrowRight className="inline-block ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/menu" className="btn-primary group">
              View Full Menu
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gradient-to-b from-royal-darkred to-royal-black pattern-nepali">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-6">Our Story</h2>
              <div className="space-y-4 text-royal-cream/80 leading-relaxed">
                <p>
                  Born from a passion for authentic Italian cuisine and inspired by the majestic Himalayas,
                  Himalayan Pizza Palace brings together the best of two worlds.
                </p>
                <p>
                  Our master chefs, trained in the heart of Italy, use traditional wood-fired ovens
                  and time-honored techniques to create pizzas that transport you to the streets of Naples.
                </p>
                <p>
                  Combined with the warmth of Nepali hospitality and a touch of local flavors,
                  we offer a dining experience that's truly unforgettable.
                </p>
              </div>
              <Link href="/about" className="btn-secondary mt-8 inline-block">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Our Restaurant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-royal-red via-nepali-crimson to-royal-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-nepali" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Reserve your table today and embark on a culinary journey from Italy to the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Make a Reservation
            </Link>
            <Link href="/menu" className="bg-white text-royal-red px-8 py-3 rounded-full font-semibold hover:bg-royal-cream transition-all duration-300 hover:scale-105">
              Order Online
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
