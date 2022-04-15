import React from 'react';
import ProductSearch from './ProductSearch'
import Products from './Products';
import Pagination from '../Pagination';
import ProductsPaginationContainer from './ProductsPaginationContainer';
import {ProductConsumer, ProductContext} from '../Context'


class ProductsPage extends React.Component {

  value = this.context
  componentDidMount(){
    this.value.resetProductsData()
  }
  render() { 
    return (
        <ProductConsumer>
          {value => {
            return (<div className='products'>
              <div><p className='title'>{value.title}</p></div>
                <ProductSearch onProductsPage={true}/>
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

ProductsPage.contextType = ProductContext

export default ProductsPage;