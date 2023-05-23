import React from "react"
import { useStateContext } from "../context/StateContext"
import {
  AiOutlineLeft,
  AiOutlineShoppingCart,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai"
import { urlFor } from "../lib/client"
import Link from "next/link"

const Cart = () => {
  const {
    setShowCart,
    totalPrice,
    totalQuantities,
    cartItems,
    incQty,
    decQty,
    qty,
  } = useStateContext()
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading"> Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length == 0 && (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={150} />
            <h3>Your Shoping Cart is Empty</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map(item => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.title}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={decQty}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
