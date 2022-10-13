import { combineReducers } from "redux";
import ItemReducer from "./ItemReducer";
import CartReducer from "./CartReducer";





const RootReducer = combineReducers({
itemStore :ItemReducer,
nameStore : CartReducer


})

export default RootReducer