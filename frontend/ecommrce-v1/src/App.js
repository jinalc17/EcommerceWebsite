// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './component/CategoryList';
import ProductDetails from './component/ProductDetails';
import { CartProvider } from './component/CartContext';
import CartIcon from './component/CartIcon';
import HomeButton from './component/HomeButton';
import CartDetails from './component/CartDetails';
import AdminLogin from './component/AdminLogin'; 
import AdminDashboard from './component/AdminDashboard'; 
import { AuthProvider } from './component/AuthContext'; 
import LoginButton from './component/LoginButton';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <HomeButton />
          <CartIcon />
          <LoginButton />
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartDetails />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
