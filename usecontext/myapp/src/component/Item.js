import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext);
    console.log(cart);
    return(
        <div className="item-card">
            <h4>Item name : {props.name}</h4>
             <p>Price : {props.price}</p>
             <button onClick={() => cart.setItems([...cart.items , {name : props.name , price : props.price}])}>
                Add to cart
            </button>
        </div>
    )
};

export default Item;