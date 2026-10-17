import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Learning", to: "/learning" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
        <div className="navbar max-w-6xl mx-auto px-4">
          <div className="navbar-start">
            <NavLink to="/" className="text-xl font-black tracking-tight hover:text-primary transition-colors">
              {profile.name}
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 font-medium">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `rounded-lg transition-colors ${
                        isActive ? "text-primary bg-primary/10" : "hover:text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open menu"
            >
              <HiMenuAlt3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-base-100 flex flex-col"
          >
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-ghost btn-circle"
                aria-label="Close menu"
              >
                <HiX className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-4xl font-black tracking-tight ${
                        isActive ? "text-primary" : "text-base-content hover:text-primary transition-colors"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}