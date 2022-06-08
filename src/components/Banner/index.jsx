import React, { useEffect, useState } from "react"
import { getCurrentLocation } from "./services/getCurrentLocation"
import "../styles/Banner.css"
import { RANDOM_CITIES } from "../../globals"

const Banner = ({ component }) => {
  const [bannerState, setBannerState] = useState({
    message: "Get the weather of my current location",
    buttonTitle: "GET NOW"
  })

  const handleGetCurrentLocation = () => {
    /**Method to ask for the geolocation and get current location weather info */
    getCurrentLocation(component)
  }

  useEffect(() => {
    const cityName = document.querySelector(".header__cityName").textContent

    const isCityNameInRandomCities = RANDOM_CITIES.find(city => city.name === cityName.trim())
    if(isCityNameInRandomCities === undefined){
      setBannerState({
        message: "Set this location as the default one",
        buttonTitle: "SET NOW"
      })
    }

  }, [])

  return(
    <div className="banner">
      <h2 className="banner__title">{bannerState.message}</h2>
      <button className="banner__button" onClick={handleGetCurrentLocation}>
        {bannerState.buttonTitle}
      </button>
    </div>
  )
}

export default Banner
