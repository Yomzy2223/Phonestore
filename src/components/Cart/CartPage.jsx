import React from 'react';
import CartTitle from './CartTitile';
import CartHeader from './CartHeader';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';

function CartPage() {
  return ( 
    <div className='cartpage'>
      <CartTitle/>
      <CartHeader/>
      <CartDetails/>
      <CartSummary/>
    </div>
  );
}

export default CartPage;