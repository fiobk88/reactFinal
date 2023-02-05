import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ product }) => {

    return (



        <Link to={`/detail/${product.id}`}>
            <div className='flex flex-col flex-wrap-reverse p-1 items-center bg-neutral-200 border-1 border-white hover:bg-cyan-50 duration-500'>
                <img className='w-48 h-48 pt-5  border-spacing-10  hover:scale-105 duration-500 ;' src={product.img} alt="" />
                <h3 className=' w-full text-center text-lg font-bold uppercase text-blue-500'>{product.name}</h3>
                <h3 className='bg-neutral-100 w-full text-center text-black font-bold capitalize'> $ {product.price}</h3>
                <h3 className='bg-neutral-100 w-full text-center text-black font-bold uppercase'>For {product.platforms}</h3>

            </div>
        </Link>



    );
};

export default Item;