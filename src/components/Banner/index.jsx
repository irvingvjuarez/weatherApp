import React, { useEffect, useState } from "react"
import { RANDOM_CITIES } from "../../globals"
import { initialState, secondaryState } from "./state"

// css
import "../styles/Banner.css"

// assets
import CloseBtn from "../../assets/icons/cancel.svg"

const Banner = ({ component }) => {
  const [bannerState, setBannerState] = useState(initialState(component))

  const handleCloseBanner = () => setBannerState({
    message: ""
  })

  useEffect(() => {
    const storagedCityName = localStorage.getItem("currentLocation") ?
      JSON.parse(localStorage.getItem("currentLocation")).name : null
    const cityName = document.querySelector(".header__cityName").textContent
    const isCityNameInRandomCities = RANDOM_CITIES.find(city => city.name === cityName.trim())

    if(storagedCityName){
      /**Here the user is watching the weather in its current location */
      if(storagedCityName === cityName) handleCloseBanner()

      /**
       * Here the user is watching weather on another
       * location and the option to set that new location
       * as the default is displayed
       */
      if(storagedCityName !== cityName) setBannerState(secondaryState(component, setBannerState))
    } else {
      /**
       * Here the User's location has been fetched
       * and displayed on the screen
       */
      if(isCityNameInRandomCities === undefined) setBannerState(secondaryState(component, setBannerState))
    }

  }, [])

  return(
    <div className="banner">
      {bannerState.message ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Banner
