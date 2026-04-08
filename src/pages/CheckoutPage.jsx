import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, CheckCircle, Plus, Minus, CreditCard, MapPin } from 'lucide-react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const tax = subtotal * 0.08;
  const total = subtotal + tax + (subtotal > 0 ? 4.99 : 0); // Flat delivery fee

  const handleCheckout = (e) => {
    e.preventDefault();
    setPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-6 text-center">
        <Header />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card-bg p-12 rounded-[2.5rem] shadow-xl border border-border-light max-w-lg w-full flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
          >
            <CheckCircle size={48} strokeWidth={2.5} />
          </motion.div>
          <h1 className="font-display text-3xl font-bold mb-4">Order Received!</h1>
          <p className="text-text-body mb-8">
            Your delicious meal is being prepared and will be handled with care. The kitchen is already on it!
          </p>
          <Link to="/menu">
            <button className="bg-accent text-white font-bold px-8 py-3.5 rounded-full hover:bg-accent/90 transition-colors">
              Return to Menu
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 pt-32 md:pt-40">
        <Link to="/menu" className="inline-flex items-center gap-2 text-text-body hover:text-accent font-medium mb-8 transition-colors">
          <ArrowLeft size={18} />
          Back to Menu
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items List */}
          <div className="flex-1">
            <h1 className="font-display text-4xl font-bold mb-8">Your Order</h1>
            
            {items.length === 0 ? (
              <div className="bg-card-bg rounded-3xl p-12 text-center border border-border-light shadow-sm">
                <ShoppingBagIcon className="w-16 h-16 text-border-light mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Cart is empty</h2>
                <p className="text-text-body mb-6">Looks like you haven't added anything yet.</p>
                <Link to="/menu" className="text-accent font-bold hover:underline">Start Ordering</Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="bg-card-bg p-4 pr-6 rounded-2xl flex items-center gap-6 border border-border-light shadow-sm"
                  >
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg leading-tight mb-1 truncate">{item.title}</h3>
                      <p className="text-accent font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-pill-bg rounded-full p-1 border border-border-light">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-text-primary transition-colors">
                        <Minus size={16} />
                      </button>
                      <span className="w-4 text-center font-bold text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-text-primary transition-colors">
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 flex items-center justify-center text-text-body hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Data & Summary */}
          {items.length > 0 && (
            <div className="lg:w-[420px] shrink-0">
              <form onSubmit={handleCheckout} className="bg-card-bg rounded-3xl p-8 border border-border-light shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-32">
                <h2 className="text-xl font-bold mb-6">Delivery Details</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 text-text-body pointer-events-none" size={20} />
                    <input 
                      required
                      type="text" 
                      placeholder="Delivery Address" 
                      className="w-full pl-12 pr-4 py-3 bg-background border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="Apartment, suite, etc." 
                      className="w-full px-4 py-3 bg-background border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-3.5 text-text-body pointer-events-none" size={20} />
                    <input 
                      required
                      type="text" 
                      placeholder="Card Number" 
                      className="w-full pl-12 pr-4 py-3 bg-background border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="mb-6 space-y-3 pb-6 border-b border-border-light">
                  <div className="flex justify-between text-text-body">
                    <span>Subtotal</span>
                    <span className="text-text-primary font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-body">
                    <span>Tax</span>
                    <span className="text-text-primary font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-body">
                    <span>Delivery</span>
                    <span className="text-text-primary font-medium">$4.99</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-2xl mb-8">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/30 hover:bg-accent/90 focus:scale-[0.98] transition-all"
                >
                  Place Order
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

const ShoppingBagIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/polygons" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
