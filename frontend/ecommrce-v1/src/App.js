import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import CategoryList from './component/CategoryList';
import ProductDetails from './component/ProductDetails';
import { CartProvider } from './component/CartContext';
import CartIcon from './component/CartIcon';
import HomeButton from './component/HomeButton';
import CartDetails from './component/CartDetails';

const App = () => {
    return (
      <CartProvider>
        <Router>   
          <HomeButton />       
          <CartIcon />
          <Routes>          
          <Route path="/" element={<CategoryList />}/>
          <Route path="/products/:id" element={<ProductDetails />} /> 
          <Route path="/cart" element={<CartDetails />} />
            
          </Routes>
        </Router>
      </CartProvider>
    );
  };

export default App;
