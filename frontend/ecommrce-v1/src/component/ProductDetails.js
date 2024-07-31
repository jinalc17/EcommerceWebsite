import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Ensure you have your CSS file for ProductDetails

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

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

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('Added to cart:', product);
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
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
