import React from "react"
import getWeatherStatus from "../utils/getWeatherStatus"

import cloudy from "../assets/icons/cloudy.png"
import slightlyCloudy from "../assets/icons/slightlyCloudy.png"
import rainy from "../assets/icons/rainy.png"
import snowy from "../assets/icons/snowy.png"
import strange from "../assets/icons/strange.png"
import sunny from "../assets/icons/sunny.png"
import thunder from "../assets/icons/thunder.png"

import "./styles/BasicInfo.css"

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let weatherStatus = getWeatherStatus(this.props.status)

        return(
            <section className="basic-info">
                <article className="basic-info__sky-data">
                    <div>
                        <img className="sky-data__logo" src={cloudy}/>
                        <h3 className="sku-data__title">{weatherStatus}</h3>
                    </div>

                    <div className="basic-info__local-time">
                        <h3>Local time: </h3>
                        <span className="local-time__date">05/08/2021</span>
                        <span className="local-time__time">10:59 am</span>
                        <img src="https://www.countryflags.io/mx/shiny/64.png" alt="country flag" />
                    </div>
                </article>
            </section>
        )
    }
}

export default BasicInfo