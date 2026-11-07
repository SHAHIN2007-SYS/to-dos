import { useState,useEffect } from "react";
import axios from "axios"
import { useContext } from "react";
import { Mycontex } from "./addtocart";
import { useNavigate } from "react-router-dom";

    



function Product(){
    const {cart,Cart} = useContext(Mycontex)
const Navigate=useNavigate()
    
     const[product,setProduct] = useState([])

     
     useEffect(()=>{
        
            axios
                .get("https://dummyjson.com/products")
                .then((res)=>setProduct(res.data.products))
                .catch((error)=> console.log(error))
       
       
        
     },[])


function cartshow(){
    Navigate("/cart")
}


     return (
        <>

        <h1>PRODUCTS</h1>

        {product.map((items)=>(
            <div key={items.id}>
                <h1>{items.title}</h1>
                <h2>{items.price}</h2>
                <img src={items.thumbnail} alt={items.title}/>
                <h5>{items.description}</h5>
<button onClick={()=>Cart(items)}> ADD TO CART </button>
            
            </div>
        ))}
        
        
<button onClick={cartshow}>show cart</button>


   
        
        </>
     )
}

export default Product