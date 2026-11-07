import React from "react";

import Product from "./products";
import Add from "./addtocart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tap from "./display";

function App(){

  return (
    <>
    <BrowserRouter>
       <h1>HELLO</h1>
      <Add>
      <Routes>
      <Route path="/" element={<Product/>}></Route>
      <Route path="/cart" element={<Tap/>}></Route>
      </Routes>
     </Add>
    </BrowserRouter>
   
     
    
    </>
  )


}

export default App