import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './CartDetails.css';
import axios from 'axios';

const CartDetails = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        contact: ''
    });

    const calculateSubtotal = () => {
        return Object.values(cart).reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const calculateTax = (subtotal) => {
        return subtotal * 0.18; // 18% tax
    };

    const calculateTotal = (subtotal, tax) => {
        return subtotal + tax;
    };

    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleQuantityChange = (id, change) => {
        const newQuantity = cart[id].quantity + change;
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity);
        }
    };

    const handleCheckoutClick = () => {
        setShowCheckout(true);
    };

    const handleUserDetailsChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const orderDetails = {
            user: userDetails,
            items: Object.values(cart),
            subtotal,
            tax,
            total,
            id:""
        };

        try {
            // Make API call to store order information
            await axios.post('http://localhost:8080/api/v1/orders', orderDetails);
            alert('Order placed successfully!');
            // Clear the cart after placing the order
            setCart([]);
            setShowCheckout(false);
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

    const cartItems = Object.values(cart);

    return (
        <div className="cart-details">
            <div className="cart-details-content">
                <div className="cart-items">
                    <h1>Cart Details</h1>
                    {cartItems.length === 0 ? (
                        <p className="empty-message">Your cart is empty</p>
                    ) : (
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-details">
                                        <p>{item.name}</p>
                                        <p>Price: ${item.price}</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                            <span>Quantity: {item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                        </div>
                                        <button onClick={() => handleRemove(item.id)} className='remove-button'>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="cart-summary">
                    <h2>Summary</h2>
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Tax (18%): ${tax.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>
                    <button onClick={handleCheckoutClick} className="checkout-button">Checkout</button>
                </div>
            </div>
            {showCheckout && (
                <div className="checkout-form">
                    <h2>Enter Your Details</h2>
                    <form onSubmit={handlePlaceOrder}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleUserDetailsChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                value={userDetails.address}
                                onChange={handleUserDetailsChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Contact</label>
                            <input
                                type="text"
                                name="contact"
                                value={userDetails.contact}
                                onChange={handleUserDetailsChange}
                                required
                            />
                        </div>
                        <button type="submit" className="checkout-button">Place Order</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CartDetails;
