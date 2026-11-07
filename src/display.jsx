import { useContext } from "react";
import React from "react";
import { Mycontex } from "./addtocart";
import { Link } from "react-router-dom";

function Tap(){
  
 const {cart} = useContext(Mycontex)

    return (
        <>
        
        {cart.map((item)=>(
            <div key={item.id}>
                <h1>{item.title}</h1>
                <h2>{item.quentity}</h2>
                <img src={item.thumbnail} alt={item.title}></img>
            </div>
        ))}

        <Link to={"/"}>Home</Link>
        
        </>
    )
}

export default Tap