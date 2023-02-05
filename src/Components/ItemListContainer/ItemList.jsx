import React from 'react';
import Item from '../Item/Item'


const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 m-1">
            {products.length > 0 ? (
                products.map((product) => <Item key={product.id} product={product} />)
            ) : (
                <div />
            )}
        </div>
    );
};

export default ItemList;