import React from 'react';
import { ProductContext } from '../Context';
import { useContext } from 'react';

function CartHeader() {
  const context = useContext(ProductContext)
  return ( 
    <div className='cartheader'>
      {
        context.cart.length===-0? null:
        <div>
          <div className='cart_element'><p>Products</p></div>
          <div className='cart_element'><p>Name of Product</p></div>
          <div className='cart_element'><p>Price</p></div>
          <div className='cart_element' style={{minWidth: '9rem'}}><p>Quantity</p></div>
          <div className='cart_element'><p>Remove</p></div>
          <div className='cart_element'><p>Total</p></div>
        </div>
      }
    </div>
  );
}

export default CartHeader;