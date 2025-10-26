'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { useStore } from '@/lib/store';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useStore();
  const [isClearing, setIsClearing] = useState(false);

  const handleClearCart = () => {
    setIsClearing(true);
    setTimeout(() => {
      clearCart();
      setIsClearing(false);
    }, 300);
  };

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 0 ? 150 : 0;
  const tax = subtotal * 0.13; // 13% VAT
  const total = subtotal + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-royal-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="font-serif text-4xl font-bold text-royal-gold mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-royal-cream/80 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link href="/menu" className="btn-primary">
            Browse Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-royal-black">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="heading-primary mb-4">Shopping Cart</h1>
            <div className="flex items-center justify-between">
              <p className="text-royal-cream/80">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
              </p>
              <button
                onClick={handleClearCart}
                className="text-royal-cream/60 hover:text-red-500 transition-colors text-sm flex items-center gap-2"
              >
                <FiTrash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="card-luxury"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-serif text-xl font-semibold text-royal-gold">
                              {item.name}
                            </h3>
                            <p className="text-royal-cream/60 text-sm mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-royal-cream/60 hover:text-red-500 transition-colors p-2"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-royal-darkred/50 hover:bg-royal-darkred border border-royal-gold/20 hover:border-royal-gold/50 flex items-center justify-center transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus className="w-4 h-4 text-royal-cream" />
                            </button>
                            <span className="text-royal-cream font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-royal-darkred/50 hover:bg-royal-darkred border border-royal-gold/20 hover:border-royal-gold/50 flex items-center justify-center transition-colors"
                              aria-label="Increase quantity"
                            >
                              <FiPlus className="w-4 h-4 text-royal-cream" />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-royal-gold font-bold text-lg">
                              NPR {(item.price * item.quantity).toLocaleString()}
                            </p>
                            <p className="text-royal-cream/60 text-sm">
                              NPR {item.price} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="card-luxury sticky top-24">
                <h2 className="font-serif text-2xl font-bold text-royal-gold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-royal-gold/20">
                  <div className="flex justify-between text-royal-cream/80">
                    <span>Subtotal</span>
                    <span>NPR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-royal-cream/80">
                    <span>Delivery Fee</span>
                    <span>NPR {deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-royal-cream/80">
                    <span>VAT (13%)</span>
                    <span>NPR {Math.round(tax).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 text-xl">
                  <span className="font-semibold text-royal-gold">Total</span>
                  <span className="font-bold text-royal-gold">
                    NPR {Math.round(total).toLocaleString()}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <FiArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/menu"
                  className="btn-secondary w-full text-center mt-3 flex items-center justify-center gap-2"
                >
                  <FiShoppingBag className="w-5 h-5" />
                  Continue Shopping
                </Link>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-royal-darkred/30 rounded-lg border border-royal-gold/20">
                  <p className="text-royal-cream/70 text-sm">
                    <span className="font-semibold text-royal-gold">Note:</span> Free delivery
                    on orders above NPR 2000. Estimated delivery time: 30-45 minutes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
