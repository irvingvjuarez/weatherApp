import React from "react"
import { getCurrentLocation } from "./services/getCurrentLocation"
import "../styles/Banner.css"

const Banner = ({ component }) => {
  const handleClick = () => {

    /**Method to ask for the geolocation and get current location weather info */
    getCurrentLocation(component)
  }

  return(
    <div className="banner">
      <h2 className="banner__title">Get the weather of my current location</h2>
      <button className="banner__button" onClick={handleClick}>
        GET NOW
      </button>
    </div>
  )
}

export default Banner
