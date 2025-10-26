'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiShoppingBag, FiHeart, FiSettings, FiLogOut, FiLogIn } from 'react-icons/fi';
import { useStore } from '@/lib/store';

export default function AccountPage() {
  const { user, setUser } = useStore();
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'favorites'>('orders');
  const [showLoginForm, setShowLoginForm] = useState(!user);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setUser({
      id: '1',
      email: loginData.email,
      name: 'John Doe',
      phone: '+977 9812345678',
      addresses: [
        {
          id: '1',
          street: 'Thamel Marg, House No. 123',
          city: 'Kathmandu',
          postalCode: '44600',
          isDefault: true,
        },
      ],
    });
    setShowLoginForm(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup
    setUser({
      id: '1',
      email: signupData.email,
      name: signupData.name,
      phone: signupData.phone,
      addresses: [],
    });
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLoginForm(true);
  };

  // Mock orders data
  const mockOrders = [
    {
      id: 'ORD001',
      date: '2025-10-20',
      total: 2599,
      status: 'Delivered',
      items: 2,
    },
    {
      id: 'ORD002',
      date: '2025-10-15',
      total: 1899,
      status: 'Delivered',
      items: 1,
    },
    {
      id: 'ORD003',
      date: '2025-10-10',
      total: 3499,
      status: 'Delivered',
      items: 3,
    },
  ];

  if (showLoginForm || !user) {
    return (
      <div className="min-h-screen pt-20 bg-royal-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md px-4"
        >
          <div className="card-luxury">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🍕</div>
              <h1 className="font-serif text-3xl font-bold text-royal-gold mb-2">
                {isSignup ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="text-royal-cream/70">
                {isSignup ? 'Join us for exclusive benefits' : 'Sign in to your account'}
              </p>
            </div>

            {!isSignup ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <FiLogIn className="w-5 h-5" />
                  Sign In
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={signupData.phone}
                    onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-royal-cream/80 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="w-full px-4 py-3 bg-royal-darkred/50 border border-royal-gold/20 rounded-lg text-royal-cream placeholder-royal-cream/40 focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <FiUser className="w-5 h-5" />
                  Create Account
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-royal-gold hover:text-royal-cream transition-colors text-sm"
              >
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-royal-black">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="heading-primary mb-4">My Account</h1>
            <p className="text-royal-cream/80">Welcome back, {user.name}!</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-luxury space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-gradient-to-r from-royal-red to-nepali-crimson text-white'
                      : 'text-royal-cream/80 hover:bg-royal-darkred/50'
                  }`}
                >
                  <FiShoppingBag className="w-5 h-5" />
                  My Orders
                </button>

                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'addresses'
                      ? 'bg-gradient-to-r from-royal-red to-nepali-crimson text-white'
                      : 'text-royal-cream/80 hover:bg-royal-darkred/50'
                  }`}
                >
                  <FiMapPin className="w-5 h-5" />
                  Addresses
                </button>

                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'favorites'
                      ? 'bg-gradient-to-r from-royal-red to-nepali-crimson text-white'
                      : 'text-royal-cream/80 hover:bg-royal-darkred/50'
                  }`}
                >
                  <FiHeart className="w-5 h-5" />
                  Favorites
                </button>

                <div className="border-t border-royal-gold/20 pt-2 mt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-royal-cream/80 hover:bg-red-600/20 hover:text-red-400 transition-colors"
                  >
                    <FiLogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeTab === 'orders' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h2 className="font-serif text-2xl font-bold text-royal-gold mb-6">
                    Order History
                  </h2>

                  {mockOrders.map((order) => (
                    <div key={order.id} className="card-luxury">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-royal-gold text-lg">
                              Order #{order.id}
                            </h3>
                            <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                              {order.status}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-royal-cream/70">
                            <span>Date: {order.date}</span>
                            <span>Items: {order.items}</span>
                            <span>Total: NPR {order.total.toLocaleString()}</span>
                          </div>
                        </div>
                        <button className="btn-secondary text-sm px-4 py-2">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'addresses' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl font-bold text-royal-gold">
                      Saved Addresses
                    </h2>
                    <button className="btn-secondary text-sm px-4 py-2">
                      Add New Address
                    </button>
                  </div>

                  {user.addresses && user.addresses.length > 0 ? (
                    <div className="space-y-4">
                      {user.addresses.map((address) => (
                        <div key={address.id} className="card-luxury">
                          <div className="flex items-start justify-between">
                            <div>
                              {address.isDefault && (
                                <span className="inline-block px-2 py-1 bg-royal-gold/20 text-royal-gold text-xs rounded mb-2">
                                  Default
                                </span>
                              )}
                              <p className="text-royal-cream mb-1">{address.street}</p>
                              <p className="text-royal-cream/70 text-sm">
                                {address.city} {address.postalCode}
                              </p>
                            </div>
                            <button className="text-royal-cream/60 hover:text-royal-gold transition-colors text-sm">
                              Edit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="card-luxury text-center py-12">
                      <FiMapPin className="w-16 h-16 text-royal-cream/40 mx-auto mb-4" />
                      <p className="text-royal-cream/60">No saved addresses yet</p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'favorites' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h2 className="font-serif text-2xl font-bold text-royal-gold mb-6">
                    Favorite Items
                  </h2>

                  <div className="card-luxury text-center py-12">
                    <FiHeart className="w-16 h-16 text-royal-cream/40 mx-auto mb-4" />
                    <p className="text-royal-cream/60 mb-4">
                      You haven't added any favorites yet
                    </p>
                    <a href="/menu" className="btn-secondary inline-block">
                      Browse Menu
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
