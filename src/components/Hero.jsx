import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf } from "lucide-react";
import BlurText from "./BlurText";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80";

const FLOATING_LEAVES = [
  { top: "12%", left: "8%", size: 20, delay: 0 },
  { top: "18%", right: "10%", left: "auto", size: 16, delay: 0.3 },
  { top: "55%", left: "5%", size: 18, delay: 0.1 },
  { top: "62%", right: "12%", left: "auto", size: 14, delay: 0.4 },
  { bottom: "20%", left: "15%", top: "auto", size: 16, delay: 0.2 },
  { bottom: "25%", right: "8%", top: "auto", size: 18, delay: 0.5 },
];

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="w-full min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-transparent relative z-10 text-center">
          <BlurText
            text="Tasteory"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-display text-[20vw] md:text-[18vw] lg:text-[14vw] whitespace-nowrap font-black text-text-primary leading-none mb-4 lowercase tracking-tight"
          />


          

          <motion.p
            className="text-text-primary text-lg md:text-2xl font-medium leading-relaxed mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Tasteory turns ordinary meals into lasting moments
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5 justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link to="/book-event">
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-[#212121] text-white text-lg font-bold"
              >
                Book Your Event
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#D1D1D1] bg-card-bg text-text-primary text-lg font-bold"
              >
                Explore Menu
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
    </section>
  );
};

export default Hero;
