import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const cartStore = useSelector(store=>store.cartStore)
  const cartItems = cartStore.cart_items
  const no_of_items = cartItems.length
  //   // const item_store = useSelector(store=>store);
  //   // const no_of_items = item_store.no_of_items;

  //   // const name_store = useSelector(store=>store.nameStore)

  return (
    <>
  {/* //   <div classNameName='Navbar'>
  //       <Link to="/">Home</Link>
  //       <Link to="/cart">Cart
  //       (N0. of items:{no_of_items})

  //       {/* Name:{name_store.name}<br/>
  //       Address: {name_store.address} */}
        
        
  {/* //       </Link><br/> */}
        
  {/* //       // Name:{name_store.name}<br/> */}
  {/* //       // Address: {name_store.address} */} 






  {/* //   // </div> */}


  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to="#">No. of items in the cart: {no_of_items}</Link>


        </li>
      
      </ul>
     
    </div>
  </div>
</nav>


    
    
    </>
  )
}

export default Navbar