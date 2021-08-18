// import React from "react"

const weatherColumn = (props) => (
    <div className="weather-column">
        <img src={props.imgUrl} alt={props.title} />
        <span>60%</span>
        <h2>25°</h2>
        <h3>23°</h3>
        <p>Fri</p>
    </div>
)

export default weatherColumn