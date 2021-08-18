import React from "react"
import BasicInfo from "../components/BasicInfo"
import TempOverview from "../components/TempOverview"
import Carousel from "../components/Carousel"
import Section from "../components/Section"

import "./styles/Weather.css"

class Weather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="weather-main">
                <BasicInfo />
                <TempOverview />

                <Section title="Temperature over time">
                    <Carousel />
                </Section>

                <Section title="Details">

                </Section>

                <Section title="Rain probability">
                    <Carousel />
                </Section>

                <Section title="Next 7 days">

                </Section>
            </section>
        )
    }
}

export default Weather