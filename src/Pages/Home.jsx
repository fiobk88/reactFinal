import React from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";


const Home = () => {
    return (
        <main className=" h-min-main pb-6">
            <div className=" py-2 text-center bg-blue-200 shadow-md w-full">
                <div>
                    <p className="text-lg text-slate-100 uppercase font-semibold pt-20">FREE SHIPPING POR TODO ENERO</p>
                </div>
            </div>
            <ItemListContainer />
        </main>
    )


};
export default Home;