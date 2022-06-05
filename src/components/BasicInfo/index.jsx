import React from "react"
import getWeatherStatus from "../../utils/getWeatherStatus"
import getWeatherImg from "../../utils/getWeatherImg"
import dateFormat from "../../utils/dateFormat"
import { FLAG_API } from "./constants"

import "../styles/BasicInfo.css"

class BasicInfo extends React.Component{

  render(){
    let weatherStatus = getWeatherStatus(this.props.status)
    let weatherImg = getWeatherImg(this.props.status)
    let localTime = String(dateFormat(this.props.time))
    const { country } = this.props

    return(
      <section className="basic-info">
        <article className="basic-info__sky-data">
          <div>
            <img className="sky-data__logo" src={weatherImg}/>
            <h3 className="sku-data__title">{weatherStatus}</h3>
          </div>

          <div className="basic-info__local-time">
            <h3>Local time: </h3>
            <span className="local-time__date">{localTime.substr(0,25)}</span>
            <img src={FLAG_API.replace("COUNTRY", country)} alt={country} title={country} />
          </div>
        </article>
      </section>
    )
  }
}

export default BasicInfo
