import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 font-bold text-slate-800 hover:opacity-90 transition-opacity min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-poppins font-black text-lg sm:text-xl shadow-md shadow-blue-500/25 shrink-0">
            VA
          </div>
          <div className="flex flex-col text-left truncate">
            <span className="font-poppins font-extrabold text-slate-900 leading-tight text-sm sm:text-base truncate">
              Vaibhav Agrawal
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-blue-600 tracking-tight truncate">
              Software Engineer @ D. E. Shaw
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-xs"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-xs"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`
            }
          >
            About & Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-xs"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-xs"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`
            }
          >
            Contact
          </NavLink>

          <a
            href="https://github.com/VaibhavNITK"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all active:scale-95"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100/80 active:bg-slate-200 transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation Card */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100"
              }`
            }
          >
            <span>🏠 Home (3D Canvas)</span>
            <span className="text-xs opacity-70">➔</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100"
              }`
            }
          >
            <span>👨‍💻 About & Experience</span>
            <span className="text-xs opacity-70">➔</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100"
              }`
            }
          >
            <span>🚀 Featured Projects</span>
            <span className="text-xs opacity-70">➔</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100"
              }`
            }
          >
            <span>💬 Contact Vaibhav</span>
            <span className="text-xs opacity-70">➔</span>
          </NavLink>

          {/* Quick Action Profile Buttons */}
          <div className="pt-3 grid grid-cols-2 gap-2.5 border-t border-slate-100 mt-2">
            <a
              href="https://github.com/VaibhavNITK"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 text-center rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm hover:bg-slate-800 active:scale-95 transition-all"
            >
              ⚡ GitHub Profile ↗
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-agrawal/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 text-center rounded-xl bg-blue-600 text-white font-bold text-xs shadow-sm hover:bg-blue-500 active:scale-95 transition-all"
            >
              💼 LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
