import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-hot-toast"

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [qty, setQty] = useState(0)

  const incQty = () => {
    setQty(prev => prev + 1)
  }
  const decQty = () => {
    if (qty > 0) setQty(prev => prev - 1)
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id) // to check if the product is already in the cart
    setTotalPrice(prev => prev + product.price * quantity)
    setTotalQuantities(prev => prev + quantity)
    if (checkProductInCart) {
      // if the product is already in the cart, then update the quantity
      const updateCartItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,//spread operator is used to copy the existing properties of the object
            quantity: cartProduct.quantity + quantity,//updating the quantity in the cart
          }
      })
      setCartItems(updateCartItems)
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])//adding the product to the cart
    }
    toast.success(`${quantity} ${product.title} added to cart`)
  }
  return (
    //Provider is used to provide the data to the child components
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalQuantities,
        totalPrice,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )
}
//useContext is used to consume the data provided by the Provider
export const useStateContext = () => useContext(Context)
