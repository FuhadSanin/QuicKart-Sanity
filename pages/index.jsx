import React from "react"
import { client } from "../lib/client"

import { HeroBanner, FooterBanner, Product } from "../components"

const Home = ({ productsData, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Description that changes after the work</p>
      </div>
      <div className="products-container">
        {productsData?.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}
// getServerSideProps is a Next.js function that runs on the server side for dynamic data fetching
export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]' // query all data from product collection
  const productsData = await client.fetch(productsQuery) // fetch data from Sanity

  const bannerQuery = '*[_type == "banner"]' // query all data from banner collection
  const bannerData = await client.fetch(bannerQuery) // fetch data from Sanity

  return {
    props: { productsData, bannerData },
  }
}

export default Home
