import React from 'react';
import { useState } from 'react';
import ItemCount from '../Item/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Storage/CardContext';


//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ product }) => {
    const [addCart, setAddCart] = useState(false);

    const cartContext = useContext(CartContext);
    const { cart, addToCart } = cartContext;

    const onAdd = (qty) => {
        addToCart(product, qty);
        setAddCart(true);
    };
    return (
        <div className="flex flex-col w-1/2 justify-evenly gap-1 items-center p-1 bg-slate-100">


            <div className="w-1/2 h-4/5 p-2 overflow-hidden  ">
                <img
                    className="w-3/4 h-full object-fill p-2 "
                    src={product.img}
                    alt=""
                />
            </div>

            <div className="flex flex-col w-1/2 items-center justify-between gap-1 p-2 ">
                <div className="flex flex-col text-center">
                    <h2 className="text-3xl font-bold text-center uppercase text-black pb-8 font-sans tracking-wide">
                        {product.name}
                    </h2>
                    <p className="text-xs font-sans">{product.description}</p>
                </div>

                <h2 className="text-2xl pt-16 font-semibold text-black font-sans">
                    Precio Oferta: $ {product.price}
                </h2>
                <div className="pt-8">
                    {addCart ? (
                        <Link
                            to="/cart"
                            className="text-base font-semibold text-red-500"
                        >
                            Terminar compra
                        </Link>
                    ) : (
                        <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
                    )}
                </div>
            </div>
        </div>
    );
};
export default ItemDetail;