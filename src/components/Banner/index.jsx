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
    const cityName = document.querySelector(".header__cityName").textContent
    const isCityNameInRandomCities = RANDOM_CITIES.find(city => city.name === cityName.trim())

    if(isCityNameInRandomCities === undefined){
      /**Using the secondary state */
      setBannerState(secondaryState(bannerState, component, setBannerState))
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
