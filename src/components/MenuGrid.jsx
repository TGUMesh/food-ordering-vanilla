import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { MENU_ITEMS } from "../data";

const CATEGORIES = ["All", ...new Set(MENU_ITEMS.map((i) => i.category))];

const MenuGrid = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-white mb-4"
        >
          Full Menu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Filter by category
        </motion.p>

        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-card-bg/10 text-gray-400 hover:bg-card-bg/15 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)" }}
                className="group bg-surface border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-primary font-bold text-xl">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="w-full py-3 rounded-xl bg-card-bg/10 hover:bg-primary hover:text-white text-white font-medium flex items-center justify-center gap-2 transition-colors">
                    <Plus size={18} />
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuGrid;
