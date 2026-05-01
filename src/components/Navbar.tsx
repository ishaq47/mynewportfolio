import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4">
      {/* Glass container */}
      <div className="max-w-6xl mx-auto mt-4">
        <div className="flex items-center justify-between h-16 px-6 rounded-2xl 
          bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-lg">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-xl font-bold tracking-wide text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              MI
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 shadow-md shadow-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden max-w-6xl mx-auto mt-2 px-4"
          >
            <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 space-y-2">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;