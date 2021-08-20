import React from "react"
import weekdayFormat from "../utils/weekdayFormat"
import getPrecipitation from "../utils/getPrecipitation"
import getWeatherImg from "../utils/getWeatherImg"
import "./styles/DayForecast.css"

const DayForecast = (props) => {
    // console.log(props.forecast)
    const { dt, pop, weather, temp } = props.forecast
    return(
        <div className="day-forecast-column">
            <img src={getWeatherImg(weather[0].main, true)} alt={weather[0].main} />
            <span>{getPrecipitation(pop)}</span>
            <h2>{Math.round(temp.max)}°</h2>
            <p>{Math.round(temp.min)}°</p>
            <p>{weekdayFormat(dt)}</p>
        </div>
    )
}

export default DayForecast