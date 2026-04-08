import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";
import EventBookingPage from "./pages/EventBookingPage";
import ProfilePage from "./pages/ProfilePage";
import FloatingLines from "./components/FloatingLines";
import SoftAurora from "./components/SoftAurora";
import ThemeToggle from "./components/ThemeToggle";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function useTheme() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || 
    localStorage.getItem("theme") || 
    "light"
  );
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme") || "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  
  return theme;
}

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

function LandingWithBackground() {
  const theme = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* WebGL background - full viewport */}
      <div className="absolute inset-0 z-0 bg-background">
        {theme === 'dark' ? (
          <FloatingLines 
            enabledWaves={["top","middle","bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        ) : (
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#c3761d"
            color2="#ff3300"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction={true}
            mouseInfluence={0.25}
          />
        )}
      </div>
      {/* Page content on top */}
      <div className="relative z-10 min-h-screen">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<LandingWithBackground />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/book-event" element={<EventBookingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
