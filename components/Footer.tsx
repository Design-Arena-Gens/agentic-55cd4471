'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-royal-black to-royal-darkred text-royal-cream pattern-nepali">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-royal-gold">
              Himalayan Pizza Palace
            </h3>
            <p className="text-sm text-royal-cream/80 leading-relaxed">
              Where Italian tradition meets Himalayan hospitality. Experience authentic Italian cuisine in the heart of Kathmandu.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-cream hover:text-royal-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-cream hover:text-royal-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-cream hover:text-royal-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-royal-gold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-royal-cream/80 hover:text-royal-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-royal-gold">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-royal-cream/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">10:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-royal-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-royal-cream/80">
                <FiMapPin className="w-5 h-5 text-royal-gold mt-0.5 flex-shrink-0" />
                <span>Thamel, Kathmandu 44600, Nepal</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-royal-cream/80">
                <FiPhone className="w-5 h-5 text-royal-gold flex-shrink-0" />
                <a href="tel:+9771234567890" className="hover:text-royal-gold transition-colors">
                  +977 1-234-5678
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-royal-cream/80">
                <FiMail className="w-5 h-5 text-royal-gold flex-shrink-0" />
                <a href="mailto:info@himalayanpizza.com" className="hover:text-royal-gold transition-colors">
                  info@himalayanpizza.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-gold/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-royal-cream/60">
              © {currentYear} Himalayan Pizza Palace. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-royal-cream/60">
              <Link href="/privacy" className="hover:text-royal-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-royal-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
