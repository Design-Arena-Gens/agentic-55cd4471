'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiCheck } from 'react-icons/fi';
import { menuItems, categories } from '@/lib/menuData';
import { useStore } from '@/lib/store';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const addToCart = useStore((state) => state.addToCart);

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: any) => {
    addToCart(item);
    setAddedItems(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black/70 to-royal-black z-10" />
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Menu"
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
            <h1 className="heading-primary mb-4">Our Menu</h1>
            <p className="text-royal-cream/90 text-lg max-w-2xl mx-auto px-4">
              Discover our exquisite selection of Italian masterpieces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-royal-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-royal-red to-nepali-crimson text-white shadow-lg shadow-royal-gold/30 scale-105'
                    : 'bg-royal-darkred/50 text-royal-cream hover:bg-royal-darkred border border-royal-gold/20 hover:border-royal-gold/50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card-luxury group"
                >
                  <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 right-3 bg-royal-gold text-royal-black px-3 py-1 rounded-full text-sm font-bold">
                      NPR {item.price}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-royal-gold mb-2">
                    {item.name}
                  </h3>

                  <p className="text-royal-cream/70 text-sm mb-4 min-h-[3rem]">
                    {item.description}
                  </p>

                  {item.ingredients && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.ingredients.slice(0, 3).map((ingredient, i) => (
                          <span
                            key={i}
                            className="text-xs bg-royal-darkred/70 text-royal-cream/80 px-2 py-1 rounded-full border border-royal-gold/20"
                          >
                            {ingredient}
                          </span>
                        ))}
                        {item.ingredients.length > 3 && (
                          <span className="text-xs text-royal-cream/60 px-2 py-1">
                            +{item.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      addedItems.has(item.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-royal-red to-nepali-crimson text-white hover:scale-105 hover:shadow-lg hover:shadow-royal-gold/30'
                    }`}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <FiCheck className="w-5 h-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <FiPlus className="w-5 h-5" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-royal-cream/60 text-lg">
                No items found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Special Note */}
      <section className="section-padding bg-gradient-to-r from-royal-darkred to-royal-black pattern-nepali">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl font-bold text-royal-gold mb-4">
              Special Dietary Requirements?
            </h3>
            <p className="text-royal-cream/80 leading-relaxed mb-6">
              We're happy to accommodate vegetarian, vegan, and gluten-free options.
              Please inform our staff of any allergies or dietary restrictions.
            </p>
            <a
              href="tel:+9771234567890"
              className="btn-secondary inline-block"
            >
              Call Us for Custom Orders
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
