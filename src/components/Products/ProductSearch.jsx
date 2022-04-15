import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../Context";
import { ProductContext } from '../Context';


function ProductSearch(props) {
  const [isOpen, setState] = useState(false)
  // const [newStyle, setnewStyle] = useState('')

  const context = useContext(ProductContext)
  const {search_input, handleChange, handleSearchClick, products, instantUpdate, clearSearchInput} = context
  const {onProductsPage} = props

  const suggestionContainer = React.useRef(null)
    const clickOutsideSuggestion = (e) => {
      if(isOpen && !suggestionContainer?.current?.contains(e.target)){
        setState(false)
      }
    }
    
  useEffect (()=>{
  if(isOpen){
    window.addEventListener('click', clickOutsideSuggestion)
  }
  return () =>{
    window.removeEventListener('click', clickOutsideSuggestion)
  }
  },[isOpen]
  )
  
  const handleChangeWithin = (e) =>{
    handleChange(e)
    setState(true)
  }
  const updateAndUnmount = (product) =>{
    instantUpdate(product)
    setState(false) 
  }
  var newStyle = ''
  if(search_input && isOpen){
    var check = products.filter((product) => (search_input=== '' ? null: product.toLowerCase().includes(search_input.toLowerCase())))
    if(check.length>0){
      newStyle='-new'
    }
  }
  var id=1;
  return (
    <div className={`products-search${newStyle}`} ref={suggestionContainer}>
      <div className='search'>
        <input type="text" placeholder='Search...' value={search_input} onChange={handleChangeWithin}/>
        {search_input && 
          <button id='remove_searchinput' onClick={clearSearchInput}><i className='fa fa-remove'></i></button>
        }
        {onProductsPage? 
        <Link to='searched'>
          <button onClick={handleSearchClick}><i className='fa fa-search' ></i></button>
        </Link>:
        <button onClick={handleSearchClick}><i className='fa fa-search' ></i></button>
        }
      </div>
      {(search_input && isOpen) && 
      <div className='search-suggestion'>
        <div>
          {
          products.filter((product) => (search_input=== '' ? product: product.toLowerCase().includes(search_input.toLowerCase()))).map((product)=> {
            if(id<10){
              return(
                <p id="product-each" onClick={()=>{updateAndUnmount(product)}} key={product+id++}>{product}</p>
              )
            }else {return null}
          })

          }
        </div>
      </div>
      }
    </div>
  );
}

export default ProductSearch;