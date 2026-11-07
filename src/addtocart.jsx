import React from "react";


import { useState} from "react";

 const Mycontex = React.createContext()

function Add( {children}){
    const [cart,setCart]=useState([])

 function Cart(p){
    

    const data= cart.find((items)=>items.id === p.id  )
    if(data){
        setCart(cart.map((items) => 
            items.id===p.id ? {...items ,quentity :items.quentity+1}
            : items
         ) )
    }
    else{
        setCart([...cart , {...p ,quentity : 1}])
    }
     
 }


 return (
    <>
    
    <Mycontex.Provider value={{cart,setCart,Cart}}>
    {children}
    </Mycontex.Provider>
    
    </>
 )



}

export default Add

export {
    Mycontex
}