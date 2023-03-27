import React, { useState } from "react";
//Provider
//Consumer

const CartContext = React.createContext();

const CartProvider = (props)=> {
    const [cartData, setCartData] = useState([]);
    const addCartData = (data)=> {
        setCartData([...cartData, data]);
    }
    const removeCartData = ()=> {
        console.log(cartData)

    }
    return (
        <CartContext.Provider value={{cartData, addCartData,removeCartData}}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext, CartProvider};