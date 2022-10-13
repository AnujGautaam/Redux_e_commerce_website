import React from 'react'


const initialData= {
    cart_items : []
}

const FinalCartReducer = (state=initialData,action) => {
 switch(action.type){
     case "ADD_TO_CART":
         return{cart_items:[...state.cart_items,action.payload]}
         
    case "REMOVE_FROM_CART":
        return{cart_items:state.cart_items.filter(item=>item!==action.payload)}
         
    case "EMPTY_THE_CART":
        return{cart_items:[]}

    default:
        return state
         
 }
}

export default FinalCartReducer