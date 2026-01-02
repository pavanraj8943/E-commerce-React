import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
             OpenStore
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Your one-stop destination for quality products, great deals,
              and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Shop", "Deals", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {["FAQ", "Returns", "Shipping", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 text-center md:text-left">
              Subscribe for latest updates & offers.
            </p>
            <div className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 rounded-r-lg
              hover:bg-indigo-700 transition">
                Go
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center md:text-left">
          <p>
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-indigo-600 transition">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition">Terms</a>
            <a href="#" className="hover:text-indigo-600 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
