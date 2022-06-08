import React, { useEffect, useState } from "react"
import { getCurrentLocation } from "./services/getCurrentLocation"
import { RANDOM_CITIES } from "../../globals"

// css
import "../styles/Banner.css"

// assets
import CloseBtn from "../../assets/icons/cancel.svg"

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

  const handleCloseBanner = () => setBannerState({
    ...bannerState,
    message: ""
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

  if(bannerState.message) {
    return(
      <div className="banner">
        {bannerState.doneTitle ? (
          <span className="banner__done">
            {bannerState.doneTitle}

            <button onClick={handleCloseBanner}>
              <img src={CloseBtn} alt="" />
            </button>
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
  }else{
    return null
  }
}

export default Banner
