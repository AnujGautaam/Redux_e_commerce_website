const initialData = {

    name: "RAM",
    address: "kathmandu"
}

const CartReducer = (state = initialData, action) => {

    switch (action.type) {
        case "UPDATE_NAME":
            return {...state, name: action.payload }
            // ...state is a rest operator used to keep the initial value intact or preserve the initial state 
        
        case "UPDATE_ADDRESS":
            return {...state, address: action.payload}



        default:
            return state
    }


}
export default CartReducer

