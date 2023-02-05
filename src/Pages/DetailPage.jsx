import React from "react";
import { useParams, Link } from 'react-router-dom';
import ItemDetailContainer from "../Components/ItemDetail/ItemDetailContainer";

const DetailPage = () => {
    let { product } = useParams();
    return (

        <main className="h-min-main pt-24">
            <ItemDetailContainer product={product} />


        </main>

    );



};
export default DetailPage;