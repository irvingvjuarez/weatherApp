import React from "react"
import "./styles/Banner.css"

const Banner = () => {
  return(
    <div className="banner">
      <h2 className="banner__title">Get the weather of my current location</h2>
      <button className="banner__button">
        GET NOW
      </button>
    </div>
  )
}

export default Banner
