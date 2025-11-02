import { useState } from 'react';

export default function CartSummary({cart, setCart}) {

// Show item count
const itemCount = cart.length;

// Total Price in cart
let totalPrice = 0
for (const item of cart){
    totalPrice += item.price;
};

// Decrement action
function decrementItem() {
    if (cart.length > 0) {
        const newCart = [...cart];
        newCart.pop();
        setCart(newCart)
    }
}
}