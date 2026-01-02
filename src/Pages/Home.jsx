import React from "react";
import ProductCard from "../components/Products/products";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Home;
