'use client'

import { createContext, useState } from "react"
export const ProductContext =createContext(null)
const Provider = ({children}) => {
    const[cartItems, setCartItems] =useState([])
  return (
    <ProductContext.Provider value={{cartItems,setCartItems}}>
        {children}
    </ProductContext.Provider>
  )
}

export default Provider