import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
        <Link
          to="/"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-900"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT: CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-4 bg-white border rounded-lg"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>

                <div className="flex items-center gap-4 mt-3">
                  <span className="text-sm font-semibold">
                    ₹{item.price * item.quantity}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="border rounded-lg p-6 h-fit bg-white">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2 text-gray-600">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="w-full py-3 bg-black text-white rounded hover:bg-gray-900 transition">
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 py-2 border rounded text-sm hover:bg-gray-100"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
