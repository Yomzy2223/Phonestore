import React from 'react';
import {ProductsData} from '../products-data'
import {searched_product} from '../products-data'
import styled from 'styled-components';

//Create product context
export const ProductContext = React.createContext()
export const ProductConsumer = ProductContext.Consumer

//Products array abstraction from the main products data
var products= []
for(var i=0; i<ProductsData.length; i++){
  products[i] = ProductsData[i].item
}

//Product provider class component
export default class ProductProvider extends React.Component {
  state = {
    title: 'Products',
    products: products,
    ProductsData: ProductsData,
    search_input: '',
    searched_input: '',
    currentPage: 1,
    productsPerPage: 10,
    searched_product: [],
    searched: false,
    detail_product: ['No Product Was Clicked'],
    prevProductsData: '',
    prev_search_input: '',
    prev_searched: '',
    cart: [],
    totalPrice: 0,
    modal: true
  }
  //change in input handler
  handleChange = async e => {
    await Promise.resolve(this.setState({search_input: e.target.value}))
      if (this.state.search_input === '') {
        this.setState(()=> ({display_sug: ''}))
      }else {
        this.setState({display_sug: "-display"})
      }
  }

  //Function to autofill the search box on click on suggested products
  instantUpdate = (product) => {
    this.setState({search_input: product, display_sug: ''})
  }

  //product search handler
  handleSearchClick = () => {
    const searched_product = ProductsData.filter((product)=>{return product.item.toLowerCase().includes(this.state.search_input.toLowerCase())})
    this.setState((state)=> ({searched_input: state.search_input, searched_product: searched_product, ProductsData: searched_product, searched: true }))
  }
  clearSearchInput = () => {
    this.setState({search_input: ''})
  }
  //Product detials handler
  handleDetails = (id) => {
    const detail_product = ProductsData.filter((product)=>{
      return product.id === id
    })
    this.setState({detail_product: detail_product})
  }
  //Pagenate function
  paginate = (pagetoshow) => {
    this.setState({currentPage: Number(pagetoshow)})
  }
  resetProductsData = () => {
    this.setState(()=> ({ProductsData: ProductsData, search_input: '', searched: false}))
  }
  //Handler to keep searched product data
  keepPrevData = () => {
    this.setState((currentState)=> ({prevProductsData: currentState.ProductsData, prev_search_input: currentState.search_input, prev_searched: true}))
  }
  //Handler to set back previously searched product data
  setPrevData = () => {
    this.setState((prevState)=> ({ProductsData: prevState.prevProductsData, search_input: prevState.prev_search_input, searched: prevState.searched}))
  }
  getItem = (id) => {
    const item = ProductsData.filter((products)=>{
      return (products.id===id)
    })
    return item;
  }
  addToCart = (id, price) => {
    const item = this.getItem(id)
    item[0].count = item[0].count+1
    item[0].inCart = true
    const newCart = [...this.state.cart, item[0]]
    this.handleTotal(price)
    this.setState({cart: newCart})
  }
  deleteFromCart = (id, price) => {
    const item = this.getItem(id)
    this.handleTotal(-price*(item[0].count))
    const Cart = [...this.state.cart]
    const Newcart = Cart.filter((product)=>{
      if(product.id===id){
        product.count=0
      }
      return (product.id!==id)
    })
    this.setState(()=>({cart: Newcart}))
  }
  incrementProductCount = (id, price) => {
    const Cart = [...this.state.cart]
    Cart.find((product)=> {
      if(product.id===id){
        return product.count = product.count + 1
      }else {
        return null
      }
    })
    this.handleTotal(price)
    this.setState(()=> ({cart: Cart}))
  }
  decrementProductCount = (id, price) => {
    const Cart = [...this.state.cart]
    Cart.find((product)=> {
      if(product.id===id){
        return product.count = product.count - 1
      }else {
        return null
      }
    })
    this.handleTotal(price)
    this.setState(()=> ({cart: Cart}))
  }
  clearCart = () => {
    const Cart = [...this.state.cart]
    Cart.forEach((product)=>{
      product.count=0
    })
    this.handleTotal(-this.state.totalPrice)
    this.setState(()=> ({cart: Cart}))
    this.setState(()=> ({cart: []}))
  }
  handleTotal = (price) => {
    this.setState((prevState)=> ({totalPrice: prevState.totalPrice + price}))
  }
  render() {
    //Pagenate setup
    this.totalPages =Math.ceil(this.state.ProductsData.length / this.state.productsPerPage)
    this.firstIndexOfCurrentPage = (this.state.currentPage-1) * this.state.productsPerPage
    this.lastIndexOfCurrentPage = (this.state.productsPerPage*this.state.currentPage)
    this.productsOnCurrentPage = this.state.ProductsData.slice(this.firstIndexOfCurrentPage, this.lastIndexOfCurrentPage)
    
    return (
      <ProductContext.Provider value={{
        ...this.state,
        OriginalProducts: ProductsData,
        handleSearchClick: this.handleSearchClick,
        handleChange: this.handleChange,
        instantUpdate: this.instantUpdate,
        clearSearchInput: this.clearSearchInput,
        handleDetails: this.handleDetails,
        getItem: this.getItem,
        paginate: this.paginate,
        totalPages: this.totalPages,
        productsOnCurrentPage: this.productsOnCurrentPage,
        resetProductsData: this.resetProductsData,
        keepPrevData: this.keepPrevData,
        setPrevData: this.setPrevData,
        addToCart: this.addToCart,
        incrementProductCount: this.incrementProductCount,
        decrementProductCount: this.decrementProductCount,
        handleTotal: this.handleTotal,
        deleteFromCart: this.deleteFromCart,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}




// export const StyledButton = styled.div`
//   background-color: white;
//   float: right;
// `

