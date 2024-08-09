import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; 
import { CartContext } from './CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
    };

    if (!product) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <p>{product.shortDescription}</p>
            <p className="price">${product.price}</p>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
