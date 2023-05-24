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
    setQty(0)
    const checkProductInCart = cartItems.find(item => item._id === product._id) // to check if the product is already in the cart
    setTotalPrice(prev => prev + product.price * quantity)
    setTotalQuantities(prev => prev + quantity)
    if (quantity != 0) {
      if (checkProductInCart) {
        // if the product is already in the cart, then update the quantity
        const updateCartItems = cartItems.map(cartProduct => {
          if (cartProduct._id === product._id)
            return {
              ...cartProduct, //spread operator is used to copy the existing properties of the object
              quantity: cartProduct.quantity + quantity, //updating the quantity in the cart
            }
        })
        setCartItems(updateCartItems)
      } else {
        product.quantity = quantity
        setCartItems([...cartItems, { ...product }]) //adding the product to the cart
      }
      toast.success(`${quantity} ${product.title} added to cart`)
    } else {
      toast.error(`Please select a quantity of ${product.title}`)
    }
  }

  let foundProduct
  let index

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find(item => item._id === id)
    index = cartItems.findIndex(item => item._id === id)

    const newCartItems = cartItems.filter(item => item._id !== id) // to avoid duplicate items in the cart
    if (value === "inc") {
      // foundProduct.quantity += 1
      // cartItems[index] = foundProduct)
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ])
      setTotalPrice(prev => prev + foundProduct.price)
      setTotalQuantities(prev => prev + 1)
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ])
        setTotalPrice(prev => prev - foundProduct.price)
        setTotalQuantities(prev => prev - 1)
      }
    }
  }
  const onremove = (product, id) => {
    toast.success(`${product.title} removed from cart`)
    const newCartList = cartItems.filter(item => item._id !== id)
    setCartItems(newCartList)
    setTotalPrice(prev => prev - product.price * product.quantity)
    setTotalQuantities(prev => prev - product.quantity)
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
        toggleCartItemQuantity,
        onremove,
      }}
    >
      {children}
    </Context.Provider>
  )
}
//useContext is used to consume the data provided by the Provider
export const useStateContext = () => useContext(Context)
