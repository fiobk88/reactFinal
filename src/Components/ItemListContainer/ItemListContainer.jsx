import React, { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';

import { useParams } from 'react-router-dom';
import { getItems, getItemsByCondition } from '../../Helpers/firebaseHelpers';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryid } = useParams();

    const getProductsFromFB = async () => {
        if (!categoryid) {
            const data = await getItems('games');
            //console.log(data);
            setProducts(data);
        } else {
            const data = await getItemsByCondition(
                'category',
                '==',
                categoryid,
                'games'
            );
            setProducts(data);
        }
    };

    useEffect(() => {
        getProductsFromFB();
    }, [categoryid]);

    return (
        <section className=" flex flex-col items-center p-12 h-min-main">
            <div className="bg-transparent pt-10">
                <ItemList products={products} />
            </div>
        </section>
    );
};
export default ItemListContainer;
