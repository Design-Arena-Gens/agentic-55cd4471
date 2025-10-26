'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80',
    category: 'food',
    title: 'Margherita Pizza',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80',
    category: 'food',
    title: 'Specialty Pizza',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    category: 'ambiance',
    title: 'Restaurant Interior',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&q=80',
    category: 'food',
    title: 'Fresh Pasta',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&q=80',
    category: 'preparation',
    title: 'Chef at Work',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1574966740135-ca76b6e95000?w=1200&q=80',
    category: 'preparation',
    title: 'Wood-Fired Oven',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1200&q=80',
    category: 'food',
    title: 'Prosciutto Pizza',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&q=80',
    category: 'drinks',
    title: 'Signature Drinks',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1200&q=80',
    category: 'food',
    title: 'Tiramisu',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80',
    category: 'ambiance',
    title: 'Cozy Dining',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=1200&q=80',
    category: 'food',
    title: 'Burrata & Prosciutto',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=1200&q=80',
    category: 'ambiance',
    title: 'Mountain Views',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'food', name: 'Food' },
  { id: 'ambiance', name: 'Ambiance' },
  { id: 'preparation', name: 'Preparation' },
  { id: 'drinks', name: 'Drinks' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black/70 to-royal-black z-10" />
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Gallery"
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
            <h1 className="heading-primary mb-4">Gallery</h1>
            <p className="text-royal-cream/90 text-lg max-w-2xl mx-auto px-4">
              A visual journey through our culinary artistry
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
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="font-serif text-lg font-semibold text-royal-gold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-royal-gold/0 group-hover:border-royal-gold/50 transition-colors duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-royal-gold transition-colors p-2 z-50"
              aria-label="Close"
            >
              <FiX className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-royal-gold transition-colors p-2 z-50"
              aria-label="Previous"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-royal-gold transition-colors p-2 z-50"
              aria-label="Next"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImageData.src}
                  alt={selectedImageData.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-2xl font-semibold text-royal-gold">
                  {selectedImageData.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="section-padding bg-gradient-to-r from-royal-darkred to-royal-black pattern-nepali">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl font-bold text-royal-gold mb-4">
              Share Your Experience
            </h3>
            <p className="text-royal-cream/80 leading-relaxed mb-6">
              Tag us @himalayanpizzapalace on Instagram and we'll feature your photos!
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Follow Us on Instagram
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
