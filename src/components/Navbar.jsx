import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  render() { 
    return (
      <div className='navbar'>
        <ul className='navbar_list'>
          <i className='fa fa-phone' style={{color: 'orange', fontSize: '2rem'}}></i>
          <Link to='/products' className='navbar_link'>
            <li>Products</li>
          </Link>
          <Link to='cart' className='navbar_link styledbutton'>
            <div>
              <i className='fa fa-cart-plus'/><li>My Cart</li>
            </div>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;