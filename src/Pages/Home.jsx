import {useContext} from "react";
import {ProductContext} from "../context/ProductContext"
import ProductCard from "../components/Products/products";


const Home = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
