import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      // Successful signup
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/menu";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex text-text-primary bg-background">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-20 relative">
        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 text-center">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
                Create an Account
              </h1>
              <p className="text-text-body">Join Tasteory and start ordering today.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold tracking-wide text-text-primary">FULL NAME</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-4 pr-4 py-3 bg-card-bg border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold tracking-wide text-text-primary">EMAIL</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-4 pr-4 py-3 bg-card-bg border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold tracking-wide text-text-primary">PASSWORD</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-4 pr-4 py-3 bg-card-bg border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-white rounded-xl font-bold shadow-lg shadow-accent/30 hover:bg-[#d92b00] disabled:opacity-70 transition-colors mt-6"
              >
                {loading ? "Creating account..." : "Sign Up"}
                {!loading && <ArrowRight size={18} />}
              </motion.button>
            </form>

            <p className="text-center text-text-body text-sm mt-8">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-accent hover:underline">
                Log In
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1816]/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"
          alt="Restaurant view"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end p-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">[JOIN US]</p>
          <h2 className="font-display text-4xl font-bold mb-4 leading-tight text-white">
            Discover a world of flavor, <br /> curated just for you.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
