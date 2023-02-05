import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null)


const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const addToCart = (item, qty) => {
        const newItem = { ...item, qty };

        if (cart.some(product => product.id === newItem.id)) {
            /*cuando el carrito ya tiene el producto que se está pasando*/
            console.warn('El producto ya está en el carrito');
            const newCart = cart.map(product => {
                if (product.id === newItem.id) {
                    product.qty = product.qty + newItem.qty;
                }
                return product;
            });
            setCart(newCart);
        } else {
            /*Cuando el carrito no tiene el producto*/
            setCart([...cart, newItem]);
        }
    }

    const removeItemById = (id) => {
        const newCart = cart.filter(el => el.id !== id);
        setCart(newCart);
    }

    const deleteCart = () => {
        setCart([]);
    }
    /*const addToCart = (item, qty) => {
        
        
        if(cart.some(el => el.id === item.id)){
            let index = cart.findIndex(el => el.id === item.id);
            let product = cart[index];
            product.qty = product.qty + qty;

            const newCart = [...cart];
            newCart.splice( index, 1 , product);

            setCart([...newCart]);
          
        } else {
            let product = {...item, qty};
            setCart ([...cart, product]);
        }
        
    }
    const deleteCartById = ( id ) => {
        let index = newCart.findIndex(el => el.id === id);
        const newCart = [...cart];
        newCart.splice( index, 1);
        setCart([...newCart]);
    }


    const deleteCart = () => {
        setCart([]);

    }*/


    return (

        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                deleteCart,
                removeItemById,

            }}>
            {props.children}
        </CartContext.Provider>


    )
};

export default CartProvider;