import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
// const cartStore = useSelector(store=>store.cartStore)
// const items_in_cart = cartStore.cart_items

const cart_items = useSelector(store=>store.cartStore.cart_items)
const dispatch = useDispatch()



  return (
    <>
    <div className='container my-5 mx-auto'>
      {
        cart_items.length>0 ?
     
    <table className='table table-bordered text-center'>
      <thead>
        <tr>
          <td>S.No</td>
          <td>Product Image</td>
          <td>Product Description</td>
          <td> Action</td>

        </tr>
      </thead>

      <tbody>
        {
          cart_items.map((item,i)=>
          <tr key={i}>
              <td>{i+1}</td>
              <td>
                <img src={item.image} alt={item.image} style={{height:"150px"}}/>
            </td> 

            <td>
            <h4>{item.name}</h4>
            <h4>{item.price}</h4>
            <p>{item.description}</p>



            </td>
            <td>
              <button className='btn btn-warning' onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})}>Remove</button>
            </td>


          </tr>
          
          )
        }
        <tr>
          <td colSpan={4}><button className='btn btn-danger' onClick={()=> dispatch({type:"EMPTY_THE_CART"})}>Empty the cart</button></td>

        </tr>



      </tbody>


    </table>
    :
    <h2 className='text-center text-warning'>There are no items in the cart</h2>
}
    </div>
    
    </>
  )
}

export default Cart