import React from 'react'
import { combineReducers } from 'redux'
import FinalItemReducer from './FinalItemReducer'
import FinalCartReducer from './FinalCartReducer'


const FinalRootReducer = combineReducers({ 
    itemStore : FinalItemReducer,
    cartStore : FinalCartReducer
}
   
)
export default FinalRootReducer

