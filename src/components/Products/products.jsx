import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
  
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4
                      flex flex-col items-center text-center cursor-pointer">
  <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-32 h-32 object-contain mb-4"
        />

        <h2 className="text-lg font-semibold line-clamp-1">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
          </span>
        </div>

        <p className="mt-2 text-sm text-yellow-500">
          ⭐ {product.rating}
        </p>
   </Link>
        <button
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg
                     hover:bg-indigo-700 transition"
          onClick={(e) => e.preventDefault()} // prevent link break
        >
          Add to Cart
        </button>
      </div>
 
  );
};

export default ProductCard;
