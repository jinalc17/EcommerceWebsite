import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import CategoryList from './component/CategoryList';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import { CartProvider } from './component/CartContext';

const App = () => {
    return (
      <CartProvider>
        <Router>
          <CategoryList />
          <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
        </Router>
      </CartProvider>
    );
  };

export default App;
