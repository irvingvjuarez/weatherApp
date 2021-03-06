import React from "react"
import Loader from "../components/Loader"
import Map from "../components/Map"
import BasicInfo from "../components/BasicInfo"
import Weather from "./Weather"

import "./styles/Home.css"
import fetchData from "../utils/fetchData"
import { RANDOM_CITIES } from "../globals"
import { ErrorView } from "../components/ErrorView"
import { HomeSkeleton } from "../skeletons/HomeSkeleton"

class Home extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const { component } = this.props
    const { state: { data: { coord } } } = component

    if(!coord.lat && !coord.lon){
      /**Fetching the current location data or a random city */
      const size = RANDOM_CITIES.length
      const currentLocation = localStorage.getItem("currentLocation") ?
        JSON.parse(localStorage.getItem("currentLocation")).name : null
      const choosenCity = currentLocation || RANDOM_CITIES[Math.floor(Math.random() * size)].name
      fetchData(component, choosenCity)
    }
  }

  render(){
    const { component } = this.props
    const {
      loading,
      error,
      data: { coord, weather, sys, timezone_offset }
    } = component.state

    if(loading) return <Loader />
    if(error) return <ErrorView component={this.props.component} />

    return(
      <section className="home-main">
        <article className="home-main__info">
          <Weather component={component} />
        </article>

        <article className="home-main__map">
          <div className="home-main__map--basic-info-container">
            <BasicInfo status={weather[0].main} country={sys.country} time={timezone_offset}/>
          </div>
          <Map lat={coord.lat} lon={coord.lon}/>
        </article>
      </section>
    )
  }
}

export default Home
