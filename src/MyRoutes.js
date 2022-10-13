import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./Hooks/pages/Homepage";
import Navbar from "./Components/Navbar";
import Cart from "./Hooks/pages/Cart";

const MyRoutes = ()=>{
    return(
        <Router>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Homepage/>}/>
            
            <Route path="/cart" element = {<Cart/>}/>

            </Routes>




        </Router>






    )
}

export default MyRoutes