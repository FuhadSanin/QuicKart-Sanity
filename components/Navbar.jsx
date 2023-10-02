import React from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
import { useStateContext } from "../context/StateContext"
import Image from "next/image"
import logocart from "./logo.png"
import Cart from "./Cart"
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className="navbar-container">
      <Link href="/">
        <Image src={logocart} width={120} height={60} objectFit="cover" />
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
