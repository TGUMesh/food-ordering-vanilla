import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import PillNav from "./PillNav";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [user, setUser] = useState(null);
  const { itemCount } = useCart();

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) {
      try {
        setUser(JSON.parse(u));
      } catch (e) {}
    }
  }, []);

  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
  ];

  if (!user) {
    NAV_ITEMS.push({ label: "Log In", href: "/login" });
  }

  // Pure dark circle logo, text removed
  const logoSvg = `data:image/svg+xml;base64,${btoa(
    `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#212121"/>
    </svg>`
  )}`;

  return (
    <>
      <PillNav
        items={NAV_ITEMS}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#212121"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#212121"
        theme="light"
        initialLoadAnimation={true}
      />

      {user && (
        <div className="fixed top-5 right-6 md:right-12 z-[100] flex items-center gap-4">
          <Link 
            to="/checkout" 
            className="relative w-12 h-12 bg-card-bg border border-border-light rounded-full flex items-center justify-center text-text-primary hover:bg-pill-bg hover:scale-105 transition shadow-lg"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-card-bg">
                {itemCount}
              </span>
            )}
          </Link>
          <Link 
            to="/profile" 
            className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-[#d92b00] hover:scale-105 transition shadow-lg shadow-accent/20"
          >
            <User size={20} />
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
