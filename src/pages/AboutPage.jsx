import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Header from "../components/Header";

const SUSHI_MAIN =
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80";
const SUSHI_STACK =
  "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80";
const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />

      <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
        {/* Faded background text */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <p
            className="absolute font-display text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-[#D9D7D3] opacity-20 whitespace-nowrap -left-20 top-20 md:top-32 rotate-[-8deg] leading-none"
            style={{ letterSpacing: "0.02em" }}
          >
            AWESOME GREAT QUALITY GOOD
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Subtitle + Heading + Stacked cards */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.p
                className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                [ABOUT TASTEORY]
              </motion.p>
              <motion.h1
                className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We believe great food tells a story —yours begins here.
              </motion.h1>
            </div>

            {/* Stacked cards (sushi on chopsticks) */}
            <motion.div
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Back cards */}
                <div className="absolute inset-0 top-3 left-3 rounded-3xl bg-card-bg/80 shadow-lg border border-border-light" />
                <div className="absolute inset-0 top-6 left-6 rounded-3xl bg-card-bg/60 shadow-md border border-border-light" />
                {/* Front card */}
                <div className="relative rounded-3xl bg-card-bg p-1 shadow-xl border border-border-light overflow-hidden">
                  <img
                    src={SUSHI_STACK}
                    alt="Sushi"
                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.src = SUSHI_MAIN;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Main image card stack */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative">
                <div className="absolute inset-0 top-4 right-4 rounded-3xl bg-card-bg/70 shadow-lg border border-border-light" />
                <div className="absolute inset-0 top-8 right-8 rounded-3xl bg-card-bg/50 shadow-md border border-border-light" />
                <div className="relative rounded-3xl bg-card-bg overflow-hidden shadow-xl border border-border-light">
                  <img
                    src={SUSHI_MAIN}
                    alt="Sushi"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom: Description + Stats */}
        <div className="relative z-10 mt-16 md:mt-24 max-w-4xl">
          <motion.p
            className="text-text-body md:text-text-body text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            At Tasteory, we combine bold flavors, premium ingredients, and creative presentation to bring you mouthwatering dishes made with love. From satisfying comfort classics to innovative food fusions, our menu is built for those who crave taste and quality in every bite.
          </motion.p>

          <div className="mt-10 pt-10 border-t border-border-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {/* Left: Avatars + 1200+ */}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex -space-x-3">
                  {AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#F8F8F8]"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-text-primary font-bold text-2xl md:text-3xl">1200+</p>
                  <p className="text-text-body text-sm md:text-base">Satisfied Customer Review</p>
                </div>
              </motion.div>

              {/* Right: Star + 4.8 */}
              <motion.div
                className="flex items-center gap-6 md:border-l md:border-border-light md:pl-16"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex-shrink-0 text-accent">
                  <Star size={40} fill="currentColor" strokeWidth={0} />
                </div>
                <div>
                  <p className="text-text-primary font-bold text-2xl md:text-3xl">4.8</p>
                  <p className="text-text-body text-sm md:text-base">Positive Rating Everywhere</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
