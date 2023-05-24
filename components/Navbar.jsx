import React from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
import { useStateContext } from "../context/StateContext"
import Cart from "./Cart"
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className="navbar-container">
      <Link href="/">
        <p className="logo">SANIN Headphone</p>
      </Link>
      <button
        type="button"
        className="cart-icon "
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineShopping classname="icons" />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
