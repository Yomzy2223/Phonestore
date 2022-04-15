import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context';
import CartProduct from './CartProduct';

function CartDetails() {
  const context = useContext(ProductContext)
  const { deleteFromCart, cart, incrementProductCount, decrementProductCount} = context

  return (
    <div className='cartdetails'>
      {cart.length >0?
        cart.map((product)=>{
          const {id, item, image, price} = product
          return (
            <CartProduct 
              key={id} id={id} item={item} image={image} price={price} increment={incrementProductCount} decrement={decrementProductCount} count={product.count}deleteFromCart= {deleteFromCart}
            />
          )
        }): null
      }
    </div>
  );
}

export default CartDetails;