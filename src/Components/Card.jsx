import Button from "./Button";

function Card(props) {
    console.log(props);


    //fragment

    return (
        <div>
            <h3> {props.title} </h3>
            <br />
            <img src="https://cdn.shopify.com/s/files/1/0249/1218/files/1.29_Soko_Glam_Website_-_Nav_Bar_Featured_Image_-_Skin_Quiz_-_Skin_Concierge-01_324x164_crop_center@2x.progressive.jpg?v=1613746499" />
            <h3> ${props.price} </h3>
            <small> {props.description} </small>
            <Button text="Hola desde props" />
        </div>
    );
}

export default Card;
