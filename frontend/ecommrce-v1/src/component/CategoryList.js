import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CategoryList.css';
import { CartContext } from './CartContext';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint =
          activeTab === 'all'
            ? 'http://localhost:8080/api/v1/products'
            : `http://localhost:8080/api/v1/products/category/${encodeURIComponent(activeTab)}`;
        
        const response = await axios.get(endpoint);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [activeTab]);

  // Convert category names to lowercase and encode spaces
  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName.toLowerCase());
  };

  return (
    <div className="category-list-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All Products
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.name ? 'active' : ''}`}
            onClick={() => handleTabClick(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <div className="product-item" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <p>${product.price}</p>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-buttons">
                <Link to={`/products/${product.id}`} className="view-details-button">
                  View Details
                </Link>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
