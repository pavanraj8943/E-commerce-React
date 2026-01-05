import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProductById = async (id) => {
    try {
      setProductDetails(null); 
      const res = await axios(`https://dummyjson.com/products/${id}`);
      setProductDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, productDetails, fetchProductById }}>
      {children}
    </ProductContext.Provider>
  );
};
