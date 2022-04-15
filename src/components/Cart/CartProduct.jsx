import React from 'react';
import { useState, useEffect } from 'react';


function CartProduct(props) {
  const [disable, setDisable] = useState(false)
  const [mount, setMount] = useState('')

  
  const {id, price, item, image, increment, decrement, deleteFromCart, count } = props

  useEffect(()=>{
    count===1? setDisable(true): setDisable(false)
  }, [count])
  const unMount = () => {
    setMount('none')
    deleteFromCart(id, price)
  }
  return (
    <div style={{display: (mount)}}>
      <div className='cart_element'>
        <img src={image} alt={item} />
      </div>
      <div className='cart_element'>
        <p><span>Product : </span>{item}</p>
      </div>
      <div className='cart_element'>
        <p><span>Price : </span><i className="fa fa-dollar"></i>{price}</p>
      </div>
      <div className='cart_element'>
        <button disabled={disable} onClick={()=>{decrement(id, price)}}>-</button>
        <button>{count}</button>
        <button onClick={()=> {increment(id, price)}}>+</button>
      </div>
      <div className="cart_element">
        <i className='fa fa-trash deleteIcon' onClick={()=> {unMount()}}></i>
      </div>
      <div className='cart_element'>
        <p><span>Item Total: </span><i className='fa fa-dollar'></i>{price * count}</p>
      </div>
    </div>
  );
}

export default CartProduct;