import React, { useContext, useState } from 'react';
import { isEmail, isEmpty } from 'validator';
import { useNavigate } from 'react-router-dom';
import { getTotalPrice } from '../../Helpers/calculateFunctions';
import { createItem, deleteItem } from '../../Helpers/firebaseHelpers';
import { presentToast } from '../../Helpers/ui';
import useForm from '../../Hooks/useForm';

import { CartContext } from '../../Storage/CardContext';

const CartForm = () => {
    const navigate = useNavigate();
    //me traigo el cart
    const { cart, deleteCart } = useContext(CartContext);
    const [success, setSuccess] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);
    //datos del formulario del formulario
    const [formValues, handleInputChange] = useForm({
        fname: '',
        lname: '',
        email: '',
        telefono: '',
    });

    const { fname, lname, email, telefono, address } = formValues;

    const dataOrder = {
        buyer: formValues,
        items: cart, //'Los del carrito'
        totalPrice: getTotalPrice(cart),
        date: new Date().toISOString(),
    };

    //validación del formulario

    //eventos del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            isEmpty(fname.trim()) ||
            isEmpty(lname.trim()) ||
            isEmpty(email.trim()) ||
            isEmpty(telefono.trim())
        ) {
            presentToast('Uno o más campos están vacíos');
            return;
        } else if (!isEmail(email)) {
            presentToast('El email no es válido');
            return;
        }

        console.log('Se envía el formulario');
        try {
            setSuccess(true);
            const response = await createItem(dataOrder, 'orders');
            deleteCart();
            setOrderNumber(response);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const cancelOrder = async () => {
        try {
            const response = await deleteItem(orderNumber, 'orders');
            console.warn(response);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {success ? (
                <div>
                    {orderNumber ? (
                        <div className="flex flex-col items-center m-8 text-lg bg-gray-100 p-4 gap-4 mr-72 ml-72 rounded-md">
                            <p className="text-lg font-medium">
                                ¡Gracias por tu compra! Este es el número de orden:{' '}
                            </p>
                            <h2 className="text-lg text-black font-semibold m-4 bg-gray-200 p-2 rounded-md hover:bg-blue-500 hover:text-white border-black hover:scale-110 duration-700">
                                {orderNumber}
                            </h2>


                        </div>
                    ) : (
                        <div className="flex flex-col items-center m-48">
                            <p>procesando compra</p>

                        </div>
                    )}
                </div>

            ) : (
                <form
                    className="flex flex-col items-center p-2 pt-14"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl p-8 font-sans ">
                        Llena tus datos para terminar la compra
                    </h2>
                    <div className="">
                        <label className="text-lg" htmlFor="">
                            Nombre :{' '}
                        </label>
                        <input
                            className="rounded-md border-2 p-1 border-gray-500 m-2"
                            type="text"
                            name="fname"
                            value={fname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form__group">
                        <label className="text-lg" htmlFor="">
                            Apellido:{' '}
                        </label>
                        <input
                            className="rounded-md border-2 p-1 border-gray-500 m-2"
                            type="text"
                            name="lname"
                            value={lname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form__group">
                        <label className="text-lg" htmlFor="">
                            Email:{' '}
                        </label>
                        <input
                            className="rounded-md border-2 p-1 border-gray-500 m-2"
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form__group">
                        <label className="text-lg" htmlFor="">
                            Telefono:{' '}
                        </label>
                        <input
                            className="rounded-md border-2 p-1 border-gray-500 m-2"
                            type="text"
                            name="telefono"
                            value={telefono}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="p-2 rounded-md border-solid  m-8 font-semibold bg-violet-300 hover:bg-black hover:text-white border-black hover:scale-90 duration-700"
                    >
                        Finalizar compra
                    </button>
                </form>
            )}
        </div>
    );
};

export default CartForm;
