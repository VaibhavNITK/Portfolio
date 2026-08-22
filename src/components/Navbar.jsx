import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-900/5 py-2.5"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-3.5"
      }`}
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 font-bold text-slate-800 hover:opacity-90 transition-all group shrink-0"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-poppins font-black text-xl shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              VA
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-poppins font-black text-slate-900 leading-tight text-base sm:text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                Vaibhav Agrawal
              </span>
            </div>
            <span className="text-[11px] font-bold text-blue-600 tracking-wide flex items-center gap-1">
              <span>Software Engineer @ D. E. Shaw</span>
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-semibold bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60 backdrop-blur-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`
            }
          >
            About & Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`
            }
          >
            Contact
          </NavLink>

          <a
            href="https://github.com/VaibhavNITK"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 shadow-md shadow-slate-900/10 transition-all duration-300 active:scale-95"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden relative p-2.5 rounded-2xl text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 active:scale-95 transition-all focus:outline-none border border-slate-200/60"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`h-0.5 w-5 bg-slate-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-5 bg-slate-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-5 bg-slate-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Engineering Opportunities</span>
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-extrabold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="text-base">🏠</span>
              <span>Home (3D World)</span>
            </div>
            <span className="text-xs opacity-80">➔</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-extrabold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="text-base">👨‍💻</span>
              <span>About & Experience</span>
            </div>
            <span className="text-xs opacity-80">➔</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-extrabold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="text-base">🚀</span>
              <span>Featured Projects</span>
            </div>
            <span className="text-xs opacity-80">➔</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-extrabold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="text-base">💬</span>
              <span>Contact Vaibhav</span>
            </div>
            <span className="text-xs opacity-80">➔</span>
          </NavLink>

          {/* Quick Action Profile Buttons */}
          <div className="pt-3 grid grid-cols-2 gap-2.5 border-t border-slate-100 mt-2">
            <a
              href="https://github.com/VaibhavNITK"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 text-center rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 active:scale-95 transition-all"
            >
              ⚡ GitHub Profile ↗
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-agrawal/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 text-center rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-500 active:scale-95 transition-all"
            >
              💼 LinkedIn Profile ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
