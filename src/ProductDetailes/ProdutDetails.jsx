import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, fetchProductById } = useContext(ProductContext);
  const [activeImg, setActiveImg] = useState("");
  const product = productDetails;


  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  useEffect(() => {
    if (productDetails?.thumbnail) {
      setActiveImg(productDetails.thumbnail);
    }
  }, [productDetails]);

  if (!productDetails) {
    return (
      <div className="h-screen flex items-center justify-center uppercase text-xs">
        Loading Product.....
      </div>
    );
  }

  const discountedPrice = (
    productDetails.price -
    (productDetails.price * productDetails.discountPercentage) / 100
  ).toFixed(2);
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20 font-sans">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          Shop / {product.category} / <span className="text-black font-bold">{product.title}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

        {/* LEFT: REFINED MEDIUM IMAGE SECTION */}
        <div className="lg:col-span-7 flex gap-6 ">
          {/* Vertical Thumbnails */}
          <div className="hidden md:flex flex-col gap-3 w-20 h-full overflow-y-auto no-scrollbar">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(img)}
                className={`w-full aspect-square cursor-pointer bg-white  transition-all duration-300 ${activeImg === img ? 'ring-1 ring-black scale-90' : 'opacity-50 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-contain p-2" alt="thumb" />
              </div>
            ))}
          </div>

          {/* Main Medium Image Container */}
          <div className="flex-1 relative bg-white flex items-center justify-center overflow-hidden rounded-sm group">
            <div className="absolute top-6 left-6 z-10 bg-black text-white px-3 py-1 text-[9px] font-bold uppercase tracking-tighter">
              {product.discountPercentage}% Off
            </div>

            <img
              src={activeImg}
              alt={product.title}
              className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO (STAYED THE SAME) */}
        <div className="lg:col-span-5 lg:sticky lg:top-10 h-fit">
          <div className="space-y-8">
            <header>
              <h2 className="text-[11px] uppercase tracking-[0.4em] text-gray-400 mb-2">{product.brand || 'Premium Collection'}</h2>
              <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-[1.1]">{product.title}</h1>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-2xl font-medium tracking-tighter text-black">${discountedPrice}</p>
                <p className="text-lg text-gray-300 line-through decoration-1">${product.price}</p>
              </div>
            </header>

            <div className="space-y-4">
              <p className="text-gray-500 leading-relaxed font-light text-[15px]">{product.description}</p>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {product.availabilityStatus} — {product.stock} units
              </div>

            </div>

            <div className="space-y-3 pt-6">
              <button className="w-full py-5 bg-black text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors">
                Purchase Now
              </button>
              <button className="w-full py-5 bg-transparent border border-neutral-200 text-black text-[11px] uppercase tracking-[0.2em] font-bold hover:border-black transition-all">
                Add to Bag
              </button>
            </div>

            <div className="pt-10 space-y-6 border-t border-neutral-200">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest mb-1 text-neutral-400">Shipping Terms</h4>
                  <p className="text-sm text-neutral-600 italic">{product.shippingInformation}</p>
                </div>
                <div className="text-right">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest mb-1 text-neutral-400">Return Policy</h4>
                  <p className="text-sm text-neutral-600">{product.returnPolicy}</p>
                </div>


              </div>

              <div className="p-4 bg-white border border-neutral-100 flex items-center gap-4">
                <img src={product.meta.qrCode} className="w-10 h-10 opacity-40" alt="qr" />
                <p className="text-[9px] text-neutral-400 leading-tight tracking-wider uppercase font-medium">Authenticity Guaranteed <br /> <span className="font-bold text-black">{product.sku}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-12 text-center">Customer Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-neutral-200 border-y border-neutral-200">
          {product.reviews.map((rev, i) => (
            <div key={i} className="p-10 hover:bg-white transition-colors group">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className={`text-[10px] ${star < rev.rating ? 'text-black' : 'text-neutral-200'}`}>●</span>
                ))}
              </div>
              <p className="text-sm text-neutral-700 leading-loose mb-6 font-light">"{rev.comment}"</p>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-tighter">{rev.reviewerName}</p>
                <p className="text-[9px] text-neutral-400 uppercase tracking-widest">{new Date(rev.date).toDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;