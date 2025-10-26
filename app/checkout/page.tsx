'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCreditCard, FiDollarSign, FiCheck } from 'react-icons/fi';
import { useStore } from '@/lib/store';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useStore();
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kathmandu',
    notes: '',
    paymentMethod: 'cod',
  });

  useEffect(() => {
    if (cart.length === 0 && step !== 'success') {
      router.push('/cart');
    }
  }, [cart.length, step, router]);

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 2000 ? 0 : 150;
  const tax = subtotal * 0.13;
  const total = subtotal + deliveryFee + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setStep('success');
    clearCart();
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-royal-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4 max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FiCheck className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="font-serif text-4xl font-bold text-royal-gold mb-4">
            Order Confirmed!
          </h1>
          <p className="text-royal-cream/80 mb-2">
            Thank you for your order, {formData.name}!
          </p>
          <p className="text-royal-cream/70 mb-8">
            We've received your order and will start preparing it right away.
            Expected delivery time: 30-45 minutes.
          </p>

          <div className="card-luxury text-left mb-8">
            <h2 className="font-serif text-xl font-semibold text-royal-gold mb-4">
              Order Summary
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-royal-cream/80">
                <span>Order Number:</span>
                <span className="font-mono">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between text-royal-cream/80">
                <span>Total Amount:</span>
                <span className="font-semibold">NPR {Math.round(total).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-royal-cream/80">
                <span>Payment Method:</span>
                <span>{formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</span>
              </div>
              <div className="flex justify-between text-royal-cream/80">
                <span>Delivery Address:</span>
                <span className="text-right">{formData.address}, {formData.city}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/account')}
              className="btn-secondary"
            >
              Track Order
            </button>
            <button
              onClick={() => router.push('/menu')}
              className="btn-primary"
            >
              Order More
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-royal-black">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step === 'details' || step === 'payment' ? 'text-royal-gold' : 'text-royal-cream/40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step === 'details' || step === 'payment' ? 'bg-gradient-to-br from-royal-gold to-nepali-crimson text-royal-black' : 'bg-royal-darkred/50'}`}>
                  1
                </div>
                <span className="hidden sm:inline">Details</span>
              </div>
              <div className="w-16 h-0.5 bg-royal-gold/20" />
              <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-royal-gold' : 'text-royal-cream/40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step === 'payment' ? 'bg-gradient-to-br from-royal-gold to-nepali-crimson text-royal-black' : 'bg-royal-darkred/50'}`}>
                  2
                </div>
                <span className="hidden sm:inline">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2">
              {step === 'details' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card-luxury"
                >
                  <h2 className="font-serif text-2xl font-bold text-royal-gold mb-6">
                    Delivery Details
                  </h2>

                  <form onSubmit={handleDetailsSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
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
                        <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                          placeholder="+977 98XXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                        placeholder="Street address, house number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                        City *
                      </label>
                      <select
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream focus:outline-none focus:border-royal-gold transition-colors"
                      >
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Lalitpur">Lalitpur</option>
                        <option value="Bhaktapur">Bhaktapur</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                        Delivery Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors resize-none"
                        placeholder="Any special instructions for delivery?"
                      />
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Continue to Payment
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 'payment' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card-luxury"
                >
                  <h2 className="font-serif text-2xl font-bold text-royal-gold mb-6">
                    Payment Method
                  </h2>

                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <label className="flex items-center p-4 bg-royal-darkred/50 border-2 border-royal-gold/20 rounded-lg cursor-pointer hover:border-royal-gold/50 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleChange}
                          className="w-5 h-5 text-royal-gold"
                        />
                        <div className="ml-4 flex-grow">
                          <div className="flex items-center gap-2">
                            <FiDollarSign className="w-5 h-5 text-royal-gold" />
                            <span className="font-semibold text-royal-cream">Cash on Delivery</span>
                          </div>
                          <p className="text-sm text-royal-cream/60 mt-1">
                            Pay when your order arrives
                          </p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 bg-royal-darkred/50 border-2 border-royal-gold/20 rounded-lg cursor-pointer hover:border-royal-gold/50 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={handleChange}
                          className="w-5 h-5 text-royal-gold"
                        />
                        <div className="ml-4 flex-grow">
                          <div className="flex items-center gap-2">
                            <FiCreditCard className="w-5 h-5 text-royal-gold" />
                            <span className="font-semibold text-royal-cream">Online Payment</span>
                          </div>
                          <p className="text-sm text-royal-cream/60 mt-1">
                            eSewa, Khalti, or Credit/Debit Card
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep('details')}
                        className="flex-1 btn-secondary"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="loader" />
                            Processing...
                          </span>
                        ) : (
                          'Place Order'
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-luxury sticky top-24"
              >
                <h2 className="font-serif text-xl font-bold text-royal-gold mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-royal-cream text-sm font-medium line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-royal-cream/60 text-xs">
                          {item.quantity} × NPR {item.price}
                        </p>
                      </div>
                      <p className="text-royal-gold text-sm font-semibold">
                        NPR {item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 py-4 border-t border-b border-royal-gold/20">
                  <div className="flex justify-between text-sm text-royal-cream/80">
                    <span>Subtotal</span>
                    <span>NPR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-royal-cream/80">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `NPR ${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm text-royal-cream/80">
                    <span>VAT (13%)</span>
                    <span>NPR {Math.round(tax).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="font-semibold text-royal-gold">Total</span>
                  <span className="font-bold text-xl text-royal-gold">
                    NPR {Math.round(total).toLocaleString()}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
