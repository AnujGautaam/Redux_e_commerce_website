import React from 'react'
import { useDispatch } from 'react-redux'

const Card = ({item}) => {
    // for the reason that there is a button for adding the cart, dispatch is used for the very reason 
    const dispatch = useDispatch()
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title text-truncate text-xs" title={item.name}>{item.name}</h5>
                        <h6 className="card-title">{item.price}</h6>

                        <p className="card-text text-truncate" title={item.description} style={{height:"35px",padding:"3px"}}>{item.description}</p>

                        <button className='btn btn-warning' onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}>Add this to cart</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Card