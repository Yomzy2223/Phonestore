import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

function Product(props) {
  const {id, item, price, image, productsPage} = props.product
  const {cart} = props
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className='product'>
            <div className='main-product'>
              <Link to='/product/details' className='product-image' onClick={()=> {value.handleDetails(id)}}>
                <img src={image} alt={item} />
              </Link>
              { cart.find((item)=>(item.id===id)) ? 
                <div className='cart-icon incart'>
                  <p>Incart</p>
                </div>:
                <div>
                  <i className='fa fa-cart-plus cart-icon' onClick={()=>{value.addToCart(id, price)}}></i>
                </div>
              }
            </div>
            <div  className='product-info'>
              <p className='product-name'>{item}</p>
              <p className='product-price'><i className='fa fa-dollar'></i>{price}</p>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
    );
}

export default Product;


// function Product(props) {
//   return (  
//     <ProductConsumer>
//       {(value)=> {
//         return (
//           <div onClick={console.log('You have clicked a product')}>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat quibusdam explicabo quos omnis ipsum eveniet sit culpa rerum cumque magnam magni eius nesciunt incidunt? Voluptate aliquam optio deleniti facilis.
//           </div>
//         )
//       }}
//     </ProductConsumer>
//   );
// }

// export default Product;