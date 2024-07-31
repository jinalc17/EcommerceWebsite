// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Ensure you have your CSS file for ProductList

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('Added to cart:', product);
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <p>${product.price}</p>
                    <img src={product.image} alt={product.name} />
                    <div className="product-buttons">
                        <Link to={`/product/${product.id}`} className="view-details-button">View Details</Link>
                        <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
