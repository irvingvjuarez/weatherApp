import React, { useEffect, useState } from "react"
import { getCurrentLocation } from "./services/getCurrentLocation"
import "../styles/Banner.css"
import { RANDOM_CITIES } from "../../globals"

const Banner = ({ component }) => {
  const [bannerState, setBannerState] = useState({
    message: "Get the weather of my current location",
    buttonTitle: "GET NOW",
    buttonAction: () => {
      /**Method to ask for the geolocation and get current location weather info */
      getCurrentLocation(component)
    },
    doneTitle: ""
  })

  useEffect(() => {
    const cityName = document.querySelector(".header__cityName").textContent

    const isCityNameInRandomCities = RANDOM_CITIES.find(city => city.name === cityName.trim())
    if(isCityNameInRandomCities === undefined){
      setBannerState({
        ...bannerState,
        message: "Set this location as the default one",
        buttonTitle: "SET NOW",
        buttonAction: () => {
          /**Here the local storage for the current location is settled */
          const { data: { name, coord } } = component.state
          const currentLocation = {
            name,
            lon: coord.lon,
            lat: coord.lat
          }

          localStorage.setItem("currentLocation", JSON.stringify(currentLocation))
          setBannerState({
            ...bannerState,
            doneTitle: "Done!"
          })
        }
      })
    }

  }, [])

  return(
    <div className="banner">
      {bannerState.doneTitle ? (
        <span className="banner__done">
          {bannerState.doneTitle}
        </span>
      ) : (
        <>
          <h2 className="banner__title">{bannerState.message}</h2>
          <button className="banner__button" onClick={bannerState.buttonAction}>
            {bannerState.buttonTitle}
          </button>
        </>
      )}
    </div>
  )
}

export default Banner
