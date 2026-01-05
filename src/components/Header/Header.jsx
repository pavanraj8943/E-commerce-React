import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="w-full bg-white
                 border-b border-neutral-200
                 animate-[slideDown_0.6s_ease-out]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1
                className="text-xl font-bold tracking-[0.2em]
                           uppercase text-black
                           transition hover:opacity-80"
              >
                OpenStore
              </h1>
            </Link>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <CiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2
                           text-neutral-500 text-lg"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2
                           text-sm text-neutral-900
                           placeholder-neutral-400
                           border border-neutral-200
                           focus:outline-none
                           focus:border-black
                           transition"
              />
            </div>
          </div>

          {/* Right: Nav + Cart */}
          <div className="flex items-center justify-end gap-6">
            
            <nav className="hidden md:flex gap-6
                            text-[11px] uppercase tracking-widest
                            text-neutral-800">
              <Link to="/" className="relative group hover:text-black transition">
                Home
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-black
                                 transition-all duration-300 group-hover:w-full" />
              </Link>

              {["Shop", "Deals", "Contact"].map((item) => (
                <span
                  key={item}
                  className="relative group cursor-pointer hover:text-black transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-black
                                   transition-all duration-300 group-hover:w-full" />
                </span>
              ))}
            </nav>

            {/* Cart Button */}
            <Link to="/cart">
              <button
                className="relative
                           border border-neutral-200
                           text-neutral-800
                           p-2
                           hover:border-black
                           hover:bg-black hover:text-white
                           transition-all"
              >
                <FaCartArrowDown size={16} />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
