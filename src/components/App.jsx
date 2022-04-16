import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import ProductsPage from './Products/ProductsPage'
import CartPage from './Cart/CartPage'
import ProductInfo from './ProductInfo'
import Default from './Default'
import SearchedProduct from './Products/SearchedProduct'
import '../css/App.css'
import ProductDetails from './Products/ProductDetails';
import ProductProvider from './Context';


class App extends React.Component {
  render() {
    return (
      <ProductProvider>
        <React.Fragment>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ProductsPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/product/details' element={<ProductDetails/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='*' element={<Default/>} />
            <Route path="product" element={<ProductInfo/>} />
            <Route path='/products/searched' element={<SearchedProduct/>} />
          </Routes>
          {console.log('log')}
        </React.Fragment>
      </ProductProvider>
    );
  }
}

export default App;