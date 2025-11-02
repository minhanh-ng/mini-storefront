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
};

// Reset action
function resetCart() {
    setCart([])
};
 
// return 
return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '20px' }}>
      <h2>Cart Summary</h2>
      <p>Items: {itemCount}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      <button onClick={decrementItem} disabled={itemCount === 0}>
        Remove Last Item
      </button>
      <button onClick={resetCart} disabled={itemCount === 0} style={{ marginLeft: '10px' }}>
        Reset Cart
      </button>
    </div>
)
};