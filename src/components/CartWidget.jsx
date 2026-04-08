import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartWidget() {
  const { itemCount, subtotal } = useCart();
  const location = useLocation();

  if (itemCount === 0 || location.pathname === '/checkout' || location.pathname === '/') return null;

  return (
    <AnimatePresence>
      <Link to="/checkout" className="fixed bottom-8 left-8 z-[100]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-6 py-4 rounded-[2rem] shadow-2xl shadow-accent/40 flex items-center gap-4 cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag size={24} />
            <motion.span
              key={itemCount}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-3 -right-3 bg-white text-accent w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold border-2 border-accent"
            >
              {itemCount}
            </motion.span>
          </div>
          <div className="flex flex-col border-l border-white/30 pl-4 items-start">
            <span className="text-[11px] text-white/90 uppercase tracking-widest font-bold">Checkout</span>
            <span className="font-display font-medium text-lg leading-tight">${subtotal.toFixed(2)}</span>
          </div>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
}
