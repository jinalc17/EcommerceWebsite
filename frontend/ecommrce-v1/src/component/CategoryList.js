import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CategoryList.css';
import { CartContext } from './CartContext'; 

const categories = [
  { id: '1', name: 'Laptop', type: 'laptop' },
  { id: '2', name: 'Tablet', type: 'tablet' },
  { id: '3', name: 'Smartphone', type: 'smartphone' },
];

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          activeTab === 'all'
            ? 'http://localhost:8080/api/v1/products'
            : `http://localhost:8080/api/v1/products/category/${activeTab}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [activeTab]);

  return (
    <div className="category-list-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Products
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.type ? 'active' : ''}`}
            onClick={() => setActiveTab(category.type)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="product-list">
        {products.map(product => (
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
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
