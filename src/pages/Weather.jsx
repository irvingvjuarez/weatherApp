import React from "react"
import Section from "../components/Section"
import BasicInfo from "../components/BasicInfo"
import TempOverview from "../components/TempOverview"
import Carousel from "../components/Carousel"
import DetailCard from "../components/DetailCard"
import WeatherColumn from "../components/WeatherColumn"

import "./styles/Weather.css"

class Weather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <BasicInfo />

                <TempOverview />

                <Section title="Temperature over time">
                    <Carousel />
                </Section>

                <Section title="Details">
                    <section className="details-container">
                        <DetailCard title="Wind" imgUrl="../assets/icons/wind.png"/>
                        <DetailCard title="Humidity" imgUrl="../assets/icons/humidity.png"/>
                        <DetailCard title="Pressure" imgUrl="../assets/icons/gauge.png"/>
                    </section>
                </Section>

                <Section title="Rain probability">
                    <Carousel />
                </Section>

                <Section title="Next 7 days">
                    <section className="nextDaysWeather">
                        <WeatherColumn />
                        <WeatherColumn />
                        <WeatherColumn />
                        <WeatherColumn />
                        <WeatherColumn />
                        <WeatherColumn />
                    </section>
                </Section>
            </React.Fragment>
        )
    }
}

export default Weather