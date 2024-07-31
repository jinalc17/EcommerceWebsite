import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (product, quantity = 1) => {
        console.log('Adding to cart:', product, quantity);
      setCart(prevCart => {
          const updatedCart = { ...prevCart };
          if (updatedCart[product.id]) {
              updatedCart[product.id].quantity += quantity;
          } else {
              updatedCart[product.id] = { ...product, quantity };
          }
          return updatedCart;
      });
  };
  

    const removeFromCart = (id) => {
        setCart(prevCart => {
            const { [id]: removedItem, ...rest } = prevCart;
            return rest;
        });
    };

    const getCartCount = () => {
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
