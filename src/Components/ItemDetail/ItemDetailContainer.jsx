import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


import { useParams } from 'react-router-dom';
import { getItemById } from '../../Helpers/firebaseHelpers';
//ItemDetailContainer recibe por prop un id, que deberá ser el id de un producto determinado

const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = useState(null);

    const { productsid } = useParams();

    const getProductByID = async () => {
        try {
            const response = await getItemById(productsid, 'games');
            setProduct(response);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProductByID();
    }, [productsid]);

    return (
        <div className=" flex flex-col items-center bg-white pb-6">
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <div />
            )}
        </div>
    );
};
export default ItemDetailContainer;