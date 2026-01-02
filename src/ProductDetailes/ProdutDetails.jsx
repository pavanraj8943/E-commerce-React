import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductData()
  }, [id]);

  const fetchProductData = async () => {
    try {
      const response = await axios(`https://dummyjson.com/products/${id}`);

      setProduct(response.data);

    } catch (error) {
      console.log(error);

    }
  }

  if (!product) return <p className="p-10">Loading...</p>;

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Images */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-2xl"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <img key={i} src={img} className="w-20 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <div className="flex gap-4 mt-4">
            <span className="text-2xl font-bold text-green-600">
              ${discountedPrice}
            </span>
            <span className="line-through">${product.price}</span>
          </div>

          <p className="mt-2">⭐ {product.rating}</p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
