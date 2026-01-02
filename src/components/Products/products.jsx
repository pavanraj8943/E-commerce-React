import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(0);

  return (
    <div
      className="relative bg-white/70 backdrop-blur-md
                 border border-gray-200/60 rounded-lg
                 hover:border-indigo-400 hover:shadow-xl
                 transition-all duration-300
                 flex flex-col group"
    >
      {/* Wishlist Heart */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="absolute top-3 right-3 z-10
                   w-9 h-9 rounded-full
                   bg-white/80 backdrop-blur
                \
                   flex items-center justify-center
                   text-gray-500 hover:text-red-500
                   hover:scale-110 transition"
      >
        <CiHeart size={28} />
      </button>

      <Link
        to={`/product/${product.id}`}
        className="p-4 flex flex-col flex-1"
      >
        {/* Image */}
        <div className="w-full h-44 flex items-center justify-center mb-3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full object-contain
                       group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Title */}
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            ₹{product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>

          <span className="text-sm text-green-600 font-medium">
            {product.discountPercentage}% off
          </span>
        </div>
    
 </Link>
      {/* Bottom Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = `/product/${product.id}`;
        }}
        className="mx-4 mb-4 mt-auto
                   py-2 text-sm font-semibold
                   rounded-md
                   bg-indigo-600/90 text-white
                   backdrop-blur
                   hover:bg-indigo-700
                   hover:shadow-lg
                   transition-all"
      >
        View Details
      </button>
       
    </div>
  );
};

export default ProductCard;
