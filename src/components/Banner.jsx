import React from "react"
import { API_BY_COORD, WEATHER_ONE_CALL_API } from "../globals";
import fetchData from "../utils/fetchData";
import "./styles/Banner.css"

const Banner = ({ component }) => {
  const handleClick = () => {
    navigator.permissions.query({name: 'geolocation'})
      .then(function(PermissionStatus) {
        if(PermissionStatus.state !== 'granted') {
          window.navigator.geolocation.getCurrentPosition(position => {
            const { longitude, latitude } = position.coords;
            // const coordinates = JSON.stringify({longitude, latitude})
            // localStorage.setItem("locationCoord", coordinates)

            const APIs = [
              API_BY_COORD.replace("LAT", latitude).replace("LON", longitude),
              WEATHER_ONE_CALL_API.replace("LAT", latitude).replace("LON", longitude)
            ]

            Promise.all(APIs.map(api => fetch(api)))
              .then(results => Promise.all(results.map(res => res.json())))
              .then(datas => {
                let locationData = {}
                datas.forEach(data => {
                  locationData = {
                    ...locationData,
                    ...data
                  }
                })
                component.setState({
                  loading: false,
                  data: {...locationData}
                })
              })
              .catch(() => {
                component.setState({
                  loading: false,
                  error: true
                })
              })

            // fetchData(component)
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
