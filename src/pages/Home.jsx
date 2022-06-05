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
    const size = RANDOM_CITIES.length
    const choosenCity = RANDOM_CITIES[Math.floor(Math.random() * size)].name
    fetchData(this.props.component, choosenCity)
  }

  renderContent(){
    const { state } = this.props.component
    const { data: { coord, weather, sys, timezone_offset } } = this.props.component.state

    if(screen.width >= 750) return(
      <React.Fragment>
        <article className="home-main__info">
          <Weather state={state} />
        </article>

        <article className="home-main__map">
          <div className="home-main__map--basic-info-container">
            <BasicInfo status={weather[0].main} country={sys.country} time={timezone_offset}/>
          </div>
          <Map lat={coord.lat} lon={coord.lon}/>
        </article>
      </React.Fragment>
    )

    return <Weather state={state} />
    // return <Map lat={coord.lat} lon={coord.lon}/>
  }

  render(){
    const { loading, error } = this.props.component.state

    if(loading) return <HomeSkeleton />

    if(error) return <ErrorView component={this.props.component} />

    return(
      <section className="home-main">
        {this.renderContent()}
      </section>
    )
  }
}

export default Home
