import React from 'react';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProductContext, ProductConsumer } from '../Context';



function ProductDetails() {
  const context = useContext(ProductContext)
  const {getItem, addToCart, detail_product} = context
  const {id} = detail_product[0]
  const product= getItem(id)
  const {item, image, price, details, inCart} = product[0]
  return (
    <div className='product_details'>
      <p className='title'>Product Details</p>
      <div className='details'>
        <div className='details_image'>
          <img src={image} alt={item}/>
        </div>
        <div className='details_desc'>
          <div>
            <p className='details_list'><b>Product:</b></p><p id='item'> {item}</p>
          </div>
          <div>
            <p className='details_list'><b>Price:</b></p><p><i className='fa fa-dollar' ></i> {price}</p>
          </div>
          <div>
            <p className='details_list'><b>Details:</b></p><p> {details}</p>
          </div>
          <div>
            <p className='details_list'><b>Details:</b></p><p> {details}</p>
          </div>
          <div>
            <p className='details_list'><b>Detailed Details:</b></p><p> {details}</p>
          </div>
          <div>
            <p className='details_list'><b>Detailed Details:</b></p><p> {details}</p>
          </div>
      <div className='tocart'>
        <Link to='/products' className='link'>
          <button className='styledbutton'>products</button>
        </Link>
        {inCart?
          <button className="styledbutton">incart</button>:
          <button className='styledbutton' onClick={()=>{addToCart(id, price)}}>Add to cart</button>
        }
      </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;

// class ProductsDetails extends React.Component {
//   render() { 
//     return (
//       <div>
//         {<div>
//           <p className='title'>{}</p>
//         </div> }
//       </div>
//     );
//   }
// }
// ProductsDetails.contextType = ProductContext;
// export default ProductsDetails;