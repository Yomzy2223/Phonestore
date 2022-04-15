import React from 'react';
import ProductSearch from './ProductSearch';
import Pagination from '../Pagination';
import { ProductConsumer, ProductContext } from '../Context';
import ProductsPaginationContainer from './ProductsPaginationContainer';
import Products from './Products'


class SearchedProduct extends React.Component {
  
  value= this.context
  componentDidMount(){
    if(!this.value.searched){
      console.log('Component did mount')
      return this.value.setPrevData()
    } return null;
  }
  // componentDidUpdate(){
  //   if(!this.value.searched){
  //     return this.value.setPrevData()
  //   } return null;
  // }

  componentWillUnmount(){
    this.value.keepPrevData()
  }

  render() { 
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className='products'>
              <p className='title'>{value.title}</p>
                <ProductSearch onProductsPage={false}/>
                <ProductsPaginationContainer>
                  <Products/>
                  <Pagination/>
                </ProductsPaginationContainer>
            </div>)
        }}
      </ProductConsumer>
    );
  }
}

SearchedProduct.contextType = ProductContext

export default SearchedProduct;
