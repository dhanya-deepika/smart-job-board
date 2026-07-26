import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-all ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-indigo-600 transition hover:opacity-80">
            <FaBriefcase className="text-2xl" />
            <span>Smart Job Board</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={navLinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/saved-jobs" className={navLinkClass}>
              Saved Jobs
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/saved-jobs" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
              Saved Jobs
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;