import { urlFor } from "../lib/client"
import Link from "next/link"
import React from "react"

const FooterBanner = ({ footerBanner }) => {
  return (
    <div>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{footerBanner.discount}</p>
            <h3>{footerBanner.largeText1}</h3>
            <h3>{footerBanner.largeText2}</h3>
            <p>{footerBanner.saleTime}</p>
          </div>
          <div className="right">
            <p>{footerBanner.smallText}</p>
            <h3>{footerBanner.midText} </h3>
            <p>{footerBanner.desc}</p>
            <Link href="">
              <button type="button">{footerBanner.buttonText}</button>
            </Link>
            <img
              src={urlFor(footerBanner.image && footerBanner.image[0])}
              className="footer-banner-image"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
