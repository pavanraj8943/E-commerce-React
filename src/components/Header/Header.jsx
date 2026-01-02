import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="w-full bg-slate-50 dark:bg-gray-900 shadow-sm
                 animate-[slideDown_0.6s_ease-out]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1
                className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400
                           tracking-wide cursor-pointer hover:scale-105 transition"
              >
                OpenStore
              </h1>
            </Link>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Search Icon */}
              <CiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2
                           text-gray-400 text-xl"
              />

              {/* Input */}
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg
                           border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Right: Nav + Cart */}
          <div className="flex items-center justify-end gap-6">
            <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
              <Link to="/" className="relative group">
                Home
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600
                                 transition-all duration-300 group-hover:w-full" />
              </Link>

              {["Shop", "Deals", "Contact"].map((item) => (
                <span key={item} className="relative group cursor-pointer">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600
                                   transition-all duration-300 group-hover:w-full" />
                </span>
              ))}
            </nav>

            {/* Cart Button */}
            <button
              className="relative bg-indigo-600 text-white px-4 py-2 rounded-lg
                         hover:bg-indigo-700 transition hover:scale-105"
            >
              <FaCartArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
