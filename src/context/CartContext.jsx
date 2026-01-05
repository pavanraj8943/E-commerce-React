import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addCart = (product) => {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === product.id);


            if (exist) {
                return prev.filter((item) => item.id !== product.id);
            }


            return [...prev, { ...product, quantity: 1 }];
        });
    };







const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
};

const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
};

return (
    <CartContext.Provider
        value={{ cart, addCart, removeFromCart, clearCart }}
    >
        {children}
    </CartContext.Provider>
);
};
