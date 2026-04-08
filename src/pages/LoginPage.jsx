import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Header from "../components/Header";

const LOGIN_IMAGE =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid credentials");

      // Successful login! Route to menu with storage
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/menu";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-text-primary">
      <Header />

      {/* Left side: Image (Hidden on smaller screens) */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src={LOGIN_IMAGE}
          alt="Delicious food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <motion.div
          className="absolute bottom-20 left-16 text-white max-w-lg z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
            [WELCOME BACK]
          </p>
          <h2 className="font-display text-4xl font-bold mb-4 leading-tight text-white">
            Taste the Extraordinary
          </h2>
          <p className="opacity-90 leading-relaxed text-lg">
            Join Tasteory and explore reservations, custom menus, and exclusive dining events.
          </p>
        </motion.div>
      </div>

      {/* Right side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 py-32 lg:py-20">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-10 text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Log In to Tasteory
            </h1>
            <p className="text-text-body">
              Enter your details below to access your account.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium text-center">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-text-primary"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-body">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-card-bg border border-border-light rounded-xl text-text-primary placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#ff3300]/50 focus:border-accent transition duration-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-text-primary"
                >
                  Password
                </label>
                <a
                  href="#forgot"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-body">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-card-bg border border-border-light rounded-xl text-text-primary placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#ff3300]/50 focus:border-accent transition duration-200"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-white rounded-xl font-bold text-base shadow-lg shadow-[#ff3300]/30 hover:bg-[#d92b00] disabled:opacity-70 transition-colors mt-6"
            >
              {loading ? "Authenticating..." : "Sign In"}
              {!loading && <ArrowRight size={18} />}
            </motion.button>
          </form>

          <p className="text-center text-text-body text-sm mt-8 pb-8">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
