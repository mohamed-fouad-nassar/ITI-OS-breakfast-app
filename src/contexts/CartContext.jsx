import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: {
        item,
        quantity: (prev[item.id]?.quantity || 0) + 1,
      },
    }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;

      if (existing.quantity === 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }

      return {
        ...prev,
        [id]: { ...existing, quantity: existing.quantity - 1 },
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
