import React from "react"
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 All rights reserved to Sanin</p>
      <p className="icons">
        <AiFillInstagram className="icons" />
        <AiFillTwitterSquare className="icons" />
      </p>
    </div>
  )
}

export default Footer
