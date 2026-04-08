import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, MapPin, Receipt, Clock, Settings, User } from 'lucide-react';
import Header from '../components/Header';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (e) {}
    } else {
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      <Header />
      
      <div className="pt-32 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-end justify-between mb-16 pb-8 border-b border-border-light"
        >
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Welcome back,</h1>
            <p className="text-2xl text-accent font-medium">{user.name}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-6 py-3 bg-card-bg border border-border-light rounded-xl hover:bg-pill-bg transition flex items-center gap-2 font-bold"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* User Settings Sidebar */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-display uppercase tracking-widest text-text-body mb-6">Account Details</h2>
            
            <div className="bg-card-bg border border-border-light p-6 rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-body font-bold">Email Address</p>
                  <p className="font-medium text-lg">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-text-body font-bold">Mobile</p>
                  <p className="font-medium text-lg">+1 (***) *** - ****</p>
                </div>
                <button className="w-full mt-4 py-3 bg-background border border-border-light rounded-xl hover:border-accent transition text-sm font-bold flex items-center justify-center gap-2">
                  <Settings size={16} /> Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Past Orders */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-display uppercase tracking-widest text-text-body">Recent Orders</h2>
                <a href="#orders" className="text-accent text-sm font-bold hover:underline">View All</a>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: '#ORD-2029', date: 'March 14, 2026', total: 42.50, status: 'Delivered', items: 'Crispy Calamari, Pad Thai Noodles' },
                  { id: '#ORD-1933', date: 'February 28, 2026', total: 68.00, status: 'Delivered', items: 'Butter Chicken, Mango Lassi, Som Tum' }
                ].map((order, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={order.id} 
                    className="bg-card-bg border border-border-light p-5 md:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">{order.id}</span>
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold uppercase rounded-full tracking-wider">
                          {order.status}
                        </span>
                      </div>
                      <p className="text-text-body text-sm font-medium mb-1"><Receipt size={14} className="inline mr-1" /> {order.date}</p>
                      <p className="text-text-secondary text-sm">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-accent mb-2">${order.total.toFixed(2)}</p>
                      <button className="px-5 py-2 whitespace-nowrap bg-background border border-border-light rounded-lg hover:bg-pill-bg text-sm font-bold transition">
                        Reorder
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Events Booking */}
            <section>
              <h2 className="text-xl font-bold font-display uppercase tracking-widest text-text-body mb-6">Event Bookings</h2>
              <div className="bg-card-bg border border-border-light border-dashed p-10 rounded-2xl text-center">
                <div className="w-16 h-16 bg-background rounded-full flex mx-auto items-center justify-center text-text-body mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">No upcoming events</h3>
                <p className="text-text-body mb-6 max-w-md mx-auto">
                  You don't have any event bookings scheduled. Are you planning a gathering or marriage soon?
                </p>
                <a href="/book-event" className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-[#d92b00] transition shadow-lg shadow-accent/20">
                  Plan an Event
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
