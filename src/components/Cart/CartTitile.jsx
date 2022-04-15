import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context';

function CartTitle() {
const context = useContext(ProductContext)
  return ( 
    <div>
      {
        context.cart.length===0 ? 
        <div className='title'>
          <p>Your cart is empty</p>
        </div>:
        <div>
          <p className='title'>Your Cart</p>
        </div>
      }
    </div>
  );
}

export default CartTitle;