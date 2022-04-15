import React from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product'



class Products extends React.Component {
  render() { 
    return (
      <ProductConsumer>
        {(value)=> {
          return (
            <div className='product-container'>
              {
                value.productsOnCurrentPage.length===0?
                <div>
                  <p id='notfound'>Oops! Item not found</p>
                </div>:
                value.productsOnCurrentPage.map((product)=> (
                <Product product={product} key={product.id} cart={value.cart}/>
              ))
              }
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}


export default Products;