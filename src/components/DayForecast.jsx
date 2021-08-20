import React from "react"
import weekdayFormat from "../utils/weekdayFormat"
import getPrecipitation from "../utils/getPrecipitation"
import "./styles/DayForecast.css"

const DayForecast = (props) => {
    // console.log(props.forecast)
    const { dt, pop } = props.forecast
    return(
        <div className="day-forecast-column">
            <img src="" alt="" />
            <span>{getPrecipitation(pop)}</span>
            <h2>25°</h2>
            <p>23°</p>
            <p>{weekdayFormat(dt)}</p>
        </div>
    )
}

export default DayForecast