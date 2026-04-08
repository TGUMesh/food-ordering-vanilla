import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';

export default function EventBookingPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
              [ PRIVATE DINING & EVENTS ]
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Extraordinary spaces for unforgettable moments.
            </h1>
            <p className="text-text-body text-lg md:text-xl">
              From intimate gatherings to grand celebrations and big marriages, our spaces and culinary expertise set the perfect stage for your event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Users, title: "Capacity", desc: "Spaces accommodating 10 to 350 guests for seated dinners or cocktail receptions." },
              { icon: Star, title: "Curated Menus", desc: "Bespoke multi-course menus crafted specifically for your event's theme and profile." },
              { icon: Calendar, title: "Dedicated Planning", desc: "Our events team handles every detail from floristry to AV production." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-card-bg p-8 rounded-3xl border border-border-light text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  <feature.icon size={26} />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-text-body text-balance">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card-bg border border-border-light rounded-[2.5rem] p-8 md:p-16 shadow-xl max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to start planning?</h2>
                <p className="text-text-body mb-8">
                  Get in touch with our Events Department. We generally require at least 3 weeks notice for large bookings such as marriages or corporate buyouts.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-background border border-border-light rounded-xl focus:ring-2 focus:ring-accent/50 outline-none" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-background border border-border-light rounded-xl focus:ring-2 focus:ring-accent/50 outline-none" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-background border border-border-light rounded-xl focus:ring-2 focus:ring-accent/50 outline-none" />
                  <textarea placeholder="Event Details (Date, Guest Count, Occasion)" rows={4} className="w-full px-4 py-3 bg-background border border-border-light rounded-xl focus:ring-2 focus:ring-accent/50 outline-none resize-none" />
                  <button type="button" className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-colors flex justify-center items-center gap-2">
                    Submit Inquiry <ArrowRight size={18} />
                  </button>
                </form>
              </div>
              <div className="w-full md:w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg hidden md:block">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Wedding event" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
