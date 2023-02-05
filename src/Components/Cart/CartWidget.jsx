import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../Storage/CardContext';
import { getTotalItems } from '../../Helpers/calculateFunctions';

const CardWitget = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
    const navigate = useNavigate();
    return (
        <button
            disabled={cart.length > 0 ? false : true}
            onClick={() => {
                navigate('/cart');
            }}
            className="cart-widget flex flex-row p-2 gap-1 disabled:opacity-80 text-blue disabled:text-gray-500 justify-end"
        >
            <FaShoppingCart size="2rem" />
            <span className="text-black text-lg">
                {cart.length > 0 ? getTotalItems(cart) : null}
            </span>
        </button>
    );
};


export default CardWitget;