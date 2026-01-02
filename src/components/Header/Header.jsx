import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-slate-50 dark:bg-gray-900 shadow-sm
    animate-[slideDown_0.6s_ease-out]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-3 items-center h-16">

          {/* Left: Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400
            tracking-wide cursor-pointer hover:scale-105 transition">
              ShopEase
            </h1>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex w-full max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-l-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-5 rounded-r-lg
              hover:bg-indigo-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Right: Nav + Cart */}
          <div className="flex items-center justify-end gap-6">

            <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
              {["Home", "Shop", "Deals", "Contact"].map((item) => (
                <a key={item} href="#" className="relative group">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600
                  transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <button className="relative bg-indigo-600 text-white px-4 py-2 rounded-lg
            hover:bg-indigo-700 transition hover:scale-105">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs
              text-white w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
