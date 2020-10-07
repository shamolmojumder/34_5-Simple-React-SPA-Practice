import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
       <h2>This is cart : {cart.length} </h2>
        </div>
    );
};

export default Cart;