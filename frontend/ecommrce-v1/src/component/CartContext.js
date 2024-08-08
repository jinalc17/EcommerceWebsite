import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            console.log('Previous cart state:', prevCart);
            console.log('Adding product:', product.name, 'with quantity:', quantity);
    
            const updatedCart = { ...prevCart };
            if (updatedCart[product.id]) {
                updatedCart[product.id].quantity += quantity;
            } else {
                updatedCart[product.id] = { ...product, quantity };
            }
    
            console.log('Updated cart state:', updatedCart);
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
