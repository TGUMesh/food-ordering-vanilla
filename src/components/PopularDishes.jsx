import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    id: 1,
    title: "Fork Theory",
    description: "Global street food fusions",
    price: "Start from $13.99",
    gradient: "from-[#A3D9AA] to-[#8EC298]",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Melt District",
    description: "Cheesy, indulgent, late-night vibes",
    price: "Start from $10.50",
    gradient: "from-[#F7A170] to-[#EA7E57]",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Fork Theory",
    description: "Global street food fusions",
    price: "Start from $13.99",
    gradient: "from-[#9AC7EF] to-[#80B0DC]",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
  },
];

const PopularDishes = () => {
  const scrollRef = useRef(null);

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section
      id="popular-dishes"
      className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-transparent"
    >
      <div className="flex items-center gap-4 w-full">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 flex-1 min-w-0">
            {CARDS.map((card, index) => (
              <motion.article
                key={card.id}
                className={`flex-shrink-0 w-[320px] md:w-[360px] rounded-[1.25rem] bg-gradient-to-br ${card.gradient} p-6 flex gap-6 items-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-[#ff3300]/50 ring-offset-2 ring-offset-white/80 shadow-md">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-text-primary font-bold text-lg md:text-xl mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[#525252] text-sm mb-3">{card.description}</p>
                  <p className="text-text-primary font-bold text-sm">
                    {card.price}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.button
            onClick={scroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-12 h-12 rounded-full border border-text-primary bg-card-bg text-text-primary flex items-center justify-center"
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>
    </section>
  );
};

export default PopularDishes;
