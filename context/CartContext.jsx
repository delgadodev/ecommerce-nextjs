import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const item = cart.find((item) => item.id === product.id);

    if (item) {
      item.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const item = cart.find((item) => item.id === product.id);

    if (item.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      item.quantity -= 1;
      setCart([...cart]);
    }
  };

  const increaseQuantity = (product) => {
    const item = cart.find((item) => item.id === product.id);

    item.quantity += 1;
    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
