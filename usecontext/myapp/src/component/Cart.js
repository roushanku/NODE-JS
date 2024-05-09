import { useContext } from "react";
import React from "react";
import { CartContext } from "../Context/Cart";

const Cart = () => {
    const cart = useContext(CartContext);

    const total = cart.items.reduce((a , b) => a + b.price , 0);
    return(
        <div>
            <h1>Cart</h1>

            {
                cart && cart.items.map((item) => (
                    <li>
                        {item.name} - $ {item.price}

                    </li>

                ))
            }

]           <h5>
                Total price : $ {total};
            </h5>
        </div>
    );
};

export default Cart;