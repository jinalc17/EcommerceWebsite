import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { CartContext } from './CartContext';
import './CartIcon.css'; 

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const itemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

    const handleClick = () => {
        navigate('/cart'); 
    };

    return (
        <div className="cart-icon" onClick={handleClick}>
            <img src="	https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_960_720.png" alt="Cart" className="cart-icon-image" />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </div>
    );
};

export default CartIcon;