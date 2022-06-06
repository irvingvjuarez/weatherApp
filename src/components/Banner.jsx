import React from "react"
import fetchData from "../utils/fetchData";
import "./styles/Banner.css"

const Banner = ({ component }) => {
  const handleClick = () => {
    navigator.permissions.query({name: 'geolocation'})
      .then(function(PermissionStatus) {
        if(PermissionStatus.state === 'denied') {
          window.navigator.geolocation.getCurrentPosition(position => {
            const { longitude, latitude } = position.coords;
            const coordinates = JSON.stringify({longitude, latitude})
            localStorage.setItem("locationCoord", coordinates)
            fetchData(component)
          });
        }
      })

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
