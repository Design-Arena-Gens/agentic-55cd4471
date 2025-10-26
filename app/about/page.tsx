'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiAward, FiUsers, FiHeart, FiTrendingUp } from 'react-icons/fi';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <div className="min-h-screen pt-20" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-black/80 via-royal-black/60 to-royal-black z-10" />
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Our Restaurant"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="heading-primary mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-royal-cream/90 max-w-3xl mx-auto leading-relaxed">
              A journey from the hills of Tuscany to the peaks of the Himalayas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="section-padding bg-royal-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800&q=80"
                alt="Chef preparing pizza"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="heading-secondary">The Beginning</h2>
              <div className="space-y-4 text-royal-cream/80 leading-relaxed">
                <p>
                  Founded in 2018, Himalayan Pizza Palace was born from a simple dream: to bring
                  authentic Italian cuisine to the heart of Kathmandu while honoring our Nepali roots.
                </p>
                <p>
                  Our founder, trained in the finest pizzerias of Naples, returned home with a
                  mission to create something extraordinary—a place where Italian tradition meets
                  Himalayan soul.
                </p>
                <p>
                  What started as a small eatery has blossomed into Kathmandu's premier destination
                  for Italian cuisine, serving thousands of satisfied guests who have become part
                  of our extended family.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <h2 className="heading-secondary">Our Philosophy</h2>
              <div className="space-y-4 text-royal-cream/80 leading-relaxed">
                <p>
                  We believe in the power of authentic ingredients and traditional methods.
                  Our dough is hand-kneaded daily and left to rise for 48 hours, ensuring the
                  perfect texture and flavor.
                </p>
                <p>
                  Every pizza is cooked in our imported wood-fired oven at exactly 485°C,
                  creating that signature char and smoky aroma that defines Neapolitan pizza.
                </p>
                <p>
                  But we're more than just technique. We infuse every dish with the warmth
                  of Nepali hospitality, making sure each guest feels at home from the moment
                  they walk through our doors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1574966740135-ca76b6e95000?w=800&q=80"
                alt="Pizza oven"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-royal-darkred to-royal-black pattern-nepali">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Our Achievements</h2>
            <p className="text-royal-cream/80 text-lg">
              Numbers that tell our story
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FiUsers, value: '50K+', label: 'Happy Customers' },
              { icon: FiAward, value: '15+', label: 'Awards Won' },
              { icon: FiHeart, value: '100K+', label: 'Pizzas Served' },
              { icon: FiTrendingUp, value: '4.9/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-royal-gold to-nepali-crimson rounded-full">
                  <stat.icon className="w-8 h-8 text-royal-black" />
                </div>
                <div className="font-serif text-4xl font-bold text-royal-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-royal-cream/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-royal-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Meet Our Team</h2>
            <p className="text-royal-cream/80 text-lg max-w-2xl mx-auto">
              The passionate people behind every delicious dish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marco Rossi',
                role: 'Head Chef',
                image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
                bio: 'Trained in Naples with 20+ years of experience',
              },
              {
                name: 'Anjali Sharma',
                role: 'Sous Chef',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
                bio: 'Master of Italian-Nepali fusion cuisine',
              },
              {
                name: 'Rajesh Thapa',
                role: 'Restaurant Manager',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
                bio: 'Ensuring every guest feels like family',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-luxury text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-royal-gold/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-royal-gold mb-1">
                  {member.name}
                </h3>
                <p className="text-royal-cream/70 text-sm mb-3">{member.role}</p>
                <p className="text-royal-cream/60 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Parallax */}
      <section className="section-padding bg-gradient-to-b from-royal-darkred to-royal-black pattern-nepali relative overflow-hidden">
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 opacity-5"
        >
          <Image
            src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=1920&q=80"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality',
                  description: 'Only the finest ingredients make it to your plate',
                },
                {
                  title: 'Authenticity',
                  description: 'Traditional methods respected and preserved',
                },
                {
                  title: 'Community',
                  description: 'Building lasting relationships with every meal',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="text-4xl font-serif font-bold text-royal-gold">
                    {value.title}
                  </div>
                  <p className="text-royal-cream/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
