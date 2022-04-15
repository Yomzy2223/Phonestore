import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context';

function CartSummary() {
  const context = useContext(ProductContext)
  const subtotal = context.totalPrice
  const tax = subtotal/10
  const total = subtotal - tax
  const {clearCart} = context
  return (
    <div className="cart_summary">
      {context.cart.length===0?
      null:
        <>
      <div>
        <button className='clearcart' onClick={()=>{clearCart()}}>clear cart</button>
      </div>
      <div>
        <p>subtotal : <span><i className='fa fa-dollar'></i>{subtotal}</span></p>
      </div>
      <div>
        <p>tax : <span><i className='fa fa-dollar'></i>{tax}</span></p>
      </div>
      <div>
        <p>total : <span><i className='fa fa-dollar '></i>{total}</span></p>
      </div>
      <div className='checkout'>
        <button>
          <p><i className='fa fa-paypal'/><i className='fa fa-cc-paypal'/> checkout</p>
        </button>
      </div>
        </>
      }
    </div>
  );
}

export default CartSummary;