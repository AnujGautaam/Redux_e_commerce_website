import { bindActionCreators } from "redux"
import React from "react"

const initialData = {
    no_of_items: 10 
}

const ItemReducer = (state=initialData,action)=>{
    switch(action.type){
         case "INCREASE": 
        return {no_of_items:++state.no_of_items}

        case "DECREASE":
            return {no_of_items:--state.no_of_items}

        case "RESET":
            return {no_of_items:100}

        default:
            return state
    }
   
    
}

export default ItemReducer