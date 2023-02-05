import React from 'react';
import CartListItem from '../Components/Cart/CartListemItem';


const CartPage = () => {
    return (
        <main className="h-min-main bg-transparent pt-10">
            <div className="flex justify-center items-center w-full h-52 relative">
                <img
                    className="w-full h-full object-cover absolute brightness-75 blur-[1px]"
                    src="https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs="
                    alt=""
                />
                <div className="relative text-white text-center">
                    <h1 className="font-extrabold  text-4xl md:text-5xl bg-clip-text text-white uppercase ">
                        tu carrito
                    </h1>
                    <h2 className="font-medium">
                        Estas a un paso de finalizar tu compra
                    </h2>
                </div>
            </div>

            <div className="items-center text-center w-full h-full p-4 ">
                <CartListItem />
            </div>
        </main>
    );
};

export default CartPage;