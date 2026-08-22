import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme, THEMES } from "../context/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const currentThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0];

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsThemePickerOpen(false);
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
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-900/5 py-2.5"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/80 py-3.5"
      }`}
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 font-bold text-slate-800 dark:text-white hover:opacity-90 transition-all group shrink-0"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-poppins font-black text-xl shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              VA
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-poppins font-black text-slate-900 dark:text-white leading-tight text-base sm:text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Vaibhav Agrawal
              </span>
            </div>
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-wide flex items-center gap-1">
              <span>Software Engineer @ D. E. Shaw</span>
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-semibold bg-slate-100/70 dark:bg-slate-800/70 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60"
              }`
            }
          >
            About & Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Theme Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemePickerOpen(!isThemePickerOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-xs hover:border-blue-500 transition-all"
            >
              <span>{currentThemeObj.icon}</span>
              <span className="hidden lg:inline">{currentThemeObj.name}</span>
              <span className="text-[10px]">▼</span>
            </button>

            {isThemePickerOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 px-2.5 py-1 uppercase tracking-wider">
                  Select Theme
                </div>
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      toggleTheme(t.id);
                      setIsThemePickerOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      theme === t.id
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{t.icon}</span>
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://github.com/VaibhavNITK"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 shadow-md transition-all duration-300 active:scale-95"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Buttons (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick Theme Toggle for Mobile */}
          <button
            onClick={() => {
              const nextIndex = (THEMES.findIndex((t) => t.id === theme) + 1) % THEMES.length;
              toggleTheme(THEMES[nextIndex].id);
            }}
            className="p-2.5 rounded-2xl text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 border border-slate-200/60 dark:border-slate-700 text-sm font-bold"
            title="Toggle Theme"
          >
            {currentThemeObj.icon}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="relative p-2.5 rounded-2xl text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 active:scale-95 transition-all focus:outline-none border border-slate-200/60 dark:border-slate-700"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span
                className={`h-0.5 w-5 bg-slate-800 dark:bg-slate-100 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 bg-slate-800 dark:bg-slate-100 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 bg-slate-800 dark:bg-slate-100 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top duration-300">
          {/* Mobile Theme Selector Bar */}
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Theme:</span>
            <div className="flex items-center gap-1">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => toggleTheme(t.id)}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                    theme === t.id
                      ? "bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  title={t.name}
                >
                  {t.icon}
                </button>
              ))}
            </div>
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-2xl font-extrabold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 border border-slate-200/60 dark:border-slate-700/60"
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
                  : "text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 border border-slate-200/60 dark:border-slate-700/60"
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
                  : "text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 border border-slate-200/60 dark:border-slate-700/60"
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
                  : "text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 border border-slate-200/60 dark:border-slate-700/60"
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
          <div className="pt-3 grid grid-cols-2 gap-2.5 border-t border-slate-100 dark:border-slate-800 mt-2">
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
