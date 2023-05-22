import React from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="\">
        <p className="logo">SANIN Headphone</p>
      </Link>
      <button type="button" className="cart-icon">
        <AiOutlineShopping classname="icons" />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar
