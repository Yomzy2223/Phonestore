import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from './Context'

var pageNumbers = []

function Pagination() {
  const [navButtonIndex, setn] = useState(4)
  const [initialRun, setInitialRun] = useState(true)
  const [shifted, setShifted] = useState(0)

  const ContextValue = useContext(ProductContext)
  useEffect(
    ()=>{
      setInitialRun(false)
    },[]
  )
  const paginate = (e) => {
    ContextValue.paginate(e.target.value)
  }
  if (initialRun) {
    for(var i=1; i<=ContextValue.totalPages; i++){
    pageNumbers[i-1] = i
    }
  }
  if(ContextValue.searched || ContextValue.prev_searched){
    for(i=1; i<=ContextValue.totalPages; i++){
      pageNumbers[i-1] = i
    }
    var new_total_pages = Math.ceil(ContextValue.ProductsData.length/ContextValue.productsPerPage)
    pageNumbers = pageNumbers.filter((page) => (page<=new_total_pages))
  }
  const nextPageNumber = () => {
    pageNumbers.shift()
    setn(navButtonIndex+1)
    setShifted(shifted+1)
    setInitialRun(false)
    console.log('Next page numbers rendered: '+ pageNumbers)
  }
  const nextThreePageNumbers = () => {
    pageNumbers.shift()
    pageNumbers.shift()
    pageNumbers.shift()
    setn(navButtonIndex+3)
    setShifted(shifted+3)
    setInitialRun(false)
  }
  const prevPageNumber = () => {
    pageNumbers.unshift(shifted)
    setShifted(shifted-1)
    setn(navButtonIndex-1)
  }
  const prevThreePageNumbers = () => {
    for(var i=0; i<3; i++){
      if(shifted===2 && i===2) break
      else {
        pageNumbers.unshift(shifted-i)
      }
    }setShifted(shifted-i)
    setn(navButtonIndex-i)
  }
  var remaining_pages = 0
    return (
      <div className='pagination'>
        {shifted>1 && <button onClick={prevThreePageNumbers}>{'<<'}</button>}
        {shifted>=1 && <button onClick={prevPageNumber}>{'<'}</button>}
        {pageNumbers.map((number)=>{
          if(number<navButtonIndex) return <button onClick={paginate} key={number} value={number} className='pagination-button'>{number}</button>
          else {remaining_pages++
          return null}
        })}
        {remaining_pages>0 && <button onClick={nextPageNumber}>{'>'}</button>}
        {remaining_pages>1 && <button onClick={nextThreePageNumbers}>{'>>'}</button>}

        
      </div>
    );
  }

export default Pagination;