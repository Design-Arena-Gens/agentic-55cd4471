'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useStore } from '@/lib/store';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-royal-black/95 backdrop-blur-md shadow-2xl border-b border-royal-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
              🍕
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-royal-gold">
                Himalayan
              </span>
              <span className="font-serif text-sm text-royal-cream -mt-1">
                Pizza Palace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-royal-gold relative group ${
                  pathname === link.href ? 'text-royal-gold' : 'text-royal-cream'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/account"
              className="relative p-2 text-royal-cream hover:text-royal-gold transition-colors duration-300"
              aria-label="Account"
            >
              <FiUser className="w-6 h-6" />
              {user && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
              )}
            </Link>

            <Link
              href="/cart"
              className="relative p-2 text-royal-cream hover:text-royal-gold transition-colors duration-300"
              aria-label="Shopping Cart"
            >
              <FiShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-royal-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-royal-cream hover:text-royal-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-6 space-y-4 bg-royal-darkred/95 backdrop-blur-md border-t border-royal-gold/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-lg font-medium transition-all duration-300 hover:text-royal-gold hover:translate-x-2 ${
                pathname === link.href ? 'text-royal-gold' : 'text-royal-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
