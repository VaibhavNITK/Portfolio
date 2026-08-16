import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className='header backdrop-blur-md bg-white/90 border-b border-slate-200/60 shadow-sm sticky top-0 z-50 transition-all'>
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink 
          to='/' 
          onClick={closeMenu}
          className='flex items-center gap-2.5 font-bold text-slate-800 hover:opacity-90 transition-opacity'
        >
          <div className='w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-poppins font-black text-xl shadow-md shadow-blue-500/25 shrink-0'>
            VA
          </div>
          <div className='flex flex-col text-left'>
            <span className='font-poppins font-bold text-slate-900 leading-tight text-base sm:text-lg'>
              Vaibhav Agrawal
            </span>
            <span className='text-[10px] sm:text-xs font-semibold text-blue-600 tracking-wide'>
              Software Engineer @ D. E. Shaw
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex text-sm sm:text-base gap-6 font-medium items-center'>
          <NavLink 
            to='/' 
            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600 transition-colors" }
          >
            Home
          </NavLink>
          <NavLink 
            to='/about' 
            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600 transition-colors" }
          >
            About & Experience
          </NavLink>
          <NavLink 
            to='/projects' 
            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600 transition-colors" }
          >
            Projects
          </NavLink>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600 transition-colors" }
          >
            Contact
          </NavLink>

          <a
            href="https://github.com/VaibhavNITK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <NavLink
            to='/'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl font-semibold text-sm ${
                isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
              }`
            }
          >
            🏠 Home (3D Canvas)
          </NavLink>
          <NavLink
            to='/about'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl font-semibold text-sm ${
                isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
              }`
            }
          >
            👨‍💻 About & Experience
          </NavLink>
          <NavLink
            to='/projects'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl font-semibold text-sm ${
                isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
              }`
            }
          >
            🚀 Featured Projects
          </NavLink>
          <NavLink
            to='/contact'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl font-semibold text-sm ${
                isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
              }`
            }
          >
            💬 Contact Vaibhav
          </NavLink>

          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
            <a
              href="https://github.com/VaibhavNITK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center rounded-xl bg-slate-900 text-white font-semibold text-xs"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-agrawal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center rounded-xl bg-blue-600 text-white font-semibold text-xs"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
