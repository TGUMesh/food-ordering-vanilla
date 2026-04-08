import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Truck, UtensilsCrossed, Building2, Search, X } from "lucide-react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { MENU_ITEMS } from "../data/menuData";

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];
const SPICE_LEVELS = ["Mild", "Medium", "Spicy", "Extra Spicy"];

const CustomizeModal = ({ item, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [spiceLevel, setSpiceLevel] = useState("Medium");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");

  if (!isOpen) return null;

  const toggleAddon = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter(a => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleConfirm = () => {
    // We create a unique signature for this configured item so it stacks properly in cart
    const configString = [spiceLevel, ...selectedAddons].sort().join(",");
    const customizedItem = {
      ...item,
      id: `${item.id}-${configString}`, 
      title: item.title,
      customizations: {
        spice: spiceLevel,
        addons: selectedAddons,
        instructions: specialInstructions
      }
    };
    addToCart(customizedItem);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-lg bg-card-bg rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-border-light flex flex-col max-h-[85vh]"
        >
          {/* Header Image */}
          <div className="relative h-48 shrink-0">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition">
              <X size={20} />
            </button>
            <h2 className="absolute bottom-4 left-6 text-2xl font-display font-bold text-white">{item.title}</h2>
          </div>

          {/* Configuration Body */}
          <div className="p-6 overflow-y-auto flex-1">
            <h3 className="font-bold text-text-primary text-xl mb-4">Customize your dish</h3>
            
            {/* Global Spice Level */}
            <div className="mb-6">
              <p className="font-bold text-sm text-text-primary mb-3">SPICE LEVEL</p>
              <div className="flex flex-wrap gap-2">
                {SPICE_LEVELS.map(level => (
                  <button 
                    key={level}
                    onClick={() => setSpiceLevel(level)}
                    className={`px-4 py-2 font-medium text-sm rounded-full border transition ${spiceLevel === level ? "bg-accent border-accent text-white shadow-md shadow-accent/20" : "bg-background border-border-light text-text-body hover:border-text-body"}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Item Specific Addons */}
            {item.customizable && item.addons && item.addons.length > 0 && (
              <div className="mb-6">
                <p className="font-bold text-sm text-text-primary mb-3">ADD-ONS</p>
                <div className="flex flex-col gap-2">
                  {item.addons.map(addon => (
                    <label key={addon} className="flex items-center gap-3 p-3 rounded-xl border border-border-light hover:bg-pill-bg cursor-pointer transition">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-border-light text-accent focus:ring-accent"
                        checked={selectedAddons.includes(addon)}
                        onChange={() => toggleAddon(addon)}
                      />
                      <span className="font-medium text-text-primary">{addon}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <p className="font-bold text-sm text-text-primary mb-3">SPECIAL INSTRUCTIONS</p>
              <textarea 
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Allergies, extra sauce, etc."
                rows={3}
                className="w-full p-4 bg-background border border-border-light rounded-xl resize-none outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
          </div>

          <div className="p-6 bg-background border-t border-border-light shrink-0">
            <button 
              onClick={handleConfirm}
              className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/30 hover:bg-[#d92b00] transition-colors flex justify-center items-center gap-2"
            >
              <Plus size={20} />
              Add to Order - ${item.price.toFixed(2)}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAdd = () => {
    if (item.customizable) {
      setModalOpen(true);
    } else {
      addToCart(item);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
        className="bg-card-bg rounded-3xl overflow-hidden shadow-sm border border-border-light flex flex-col group transition-all duration-300"
      >
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-text-primary tracking-widest uppercase">
            {item.cuisine}
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h3 className="font-display font-bold text-xl text-text-primary leading-tight">
              {item.title}
            </h3>
            <span className="font-bold text-accent text-lg">
              ${item.price.toFixed(2)}
            </span>
          </div>
          
          <p className="text-text-body text-sm mb-6 flex-1 line-clamp-3">
            {item.description}
          </p>

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 ${
              added 
                ? "bg-[#22c55e] border-[#22c55e] text-white" 
                : "bg-background border border-border-light text-text-primary hover:border-accent hover:text-accent"
            }`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Check size={18} strokeWidth={3} /> Added to Cart
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-2"
                >
                  {item.customizable ? (
                    <>Customize</>
                  ) : (
                    <><Plus size={18} strokeWidth={2.5} /> Add to Cart</>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      <CustomizeModal 
        item={item} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
};

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchCat = selectedCategory === "All" || item.category === selectedCategory;
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-text-primary pb-20">
      <Header />

      {/* Top section: Menu Intro */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pt-40 md:pb-16 text-center max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
        >
          [WORLDWIDE FLAVORS]
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
        >
          Explore the Menu
        </motion.h1>
      </section>

      {/* Controls: Search and Tabs */}
      <section className="px-6 md:px-12 lg:px-20 mb-12 flex flex-col items-center">
        <div className="w-full max-w-2xl relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-body pointer-events-none" size={22} />
          <input 
            type="text" 
            placeholder="Search for a dish, cuisine, or ingredient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-card-bg border border-border-light rounded-2xl text-lg focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === cat 
                ? "bg-text-primary text-background shadow-md" 
                : "bg-card-bg border border-border-light text-text-body hover:border-text-primary hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Culinary Grid */}
      <section className="px-6 md:px-12 lg:px-20 mb-24 min-h-[50vh]">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-text-body">No dishes found matching your criteria.</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default MenuPage;
