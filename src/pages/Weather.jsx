import React from "react"
import BasicInfo from "../components/BasicInfo"
import TempOverview from "../components/TempOverview"
import Carousel from "../components/Carousel"
import Section from "../components/Section"
import DetailCard from "../components/DetailCard"
import DayForecast from "../components/DayForecast"
import Loader from "../components/Loader"

import "./styles/Weather.css"

class Weather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { loading, error } = this.props.state
        const { weather, sys, timezone_offset, main } = this.props.state.data

        if(loading){
            return(
                <Loader />
            )
        }else if(error){
            <div className="error-msg">
                <h3>Error: {error.message}</h3>
            </div>
        }else{
            return(
                <section className="weather-main">
                    <BasicInfo status={weather[0].main} country={sys.country} time={timezone_offset} />
                    <TempOverview temp={main}/>
    
                    <Section title="Temperature over time">
                        <Carousel />
                    </Section>
    
                    <Section title="Details">
                        <section className="details-container">
                            <DetailCard />
                            <DetailCard />
                            <DetailCard />
                        </section>
                    </Section>
    
                    <Section title="Rain probability">
                        <Carousel />
                    </Section>
    
                    <Section title="Next 7 days">
                        <section className="dayly-forecast-container">
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                        </section>
                    </Section>
                </section>
            )
        }
    }
}

export default Weather