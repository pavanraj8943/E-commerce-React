import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addCart } = useContext(CartContext);
  const [effects, setEffects] = useState([]);

  if (!product) return null;

  const isInCart = cart.some(item => item.id === product.id);

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(0);

  return (
    <div
      className="relative bg-white
                 w-[280px] sm:w-[300px]
                 min-h-[420px]
                 border border-neutral-200
                 rounded-sm
                 hover:border-black
                 transition-all duration-300
                 flex flex-col group"
    >
      {/* Wishlist */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addCart(product);
        }}
        className={`absolute top-4 right-4 z-10
                    w-8 h-8 flex items-center justify-center
                    transition-all duration-300
                    ${isInCart
                      ? "text-black scale-110"
                      : "text-neutral-600 hover:text-black"}`}
      >
        {isInCart ? <FaHeart size={18} /> : <CiHeart size={22} />}
      </button>

      <Link
        to={`/product/${product.id}`}
        className="p-5 flex flex-col flex-1"
      >
        {/* Image */}
        <div className="w-full h-44 flex items-center justify-center mb-6 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full object-contain
                       transition-transform duration-500
                       group-hover:scale-110"
          />
        </div>

        {/* Category / Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-widest text-neutral-600">
            {product.category}
          </span>
          <span className="text-[10px] text-neutral-700">
            ● {product.rating}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[15px] font-light text-neutral-900 leading-snug line-clamp-2 mb-4">
          {product.title}
        </h2>

        {/* Price */}
        <div className="mt-auto flex items-center gap-3">
          <span className="text-lg font-medium tracking-tight text-black">
            ₹{product.price}
          </span>

          <span className="text-sm text-neutral-500 line-through">
            ₹{originalPrice}
          </span>

          <span className="text-[11px] uppercase tracking-widest text-neutral-700">
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
        className="mx-5 mb-5 mt-6
                   py-3 text-[11px] font-bold
                   uppercase tracking-[0.2em]
                   text-neutral-900
                   border border-neutral-300
                   hover:border-black
                   hover:bg-black hover:text-white
                   transition-all"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
