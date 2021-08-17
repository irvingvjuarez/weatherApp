import React from "react"
import Section from "../components/Section"
import BasicInfo from "../components/BasicInfo"
import TempOverview from "../components/TempOverview"
import Carousel from "../components/Carousel"

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
            </React.Fragment>
        )
    }
}

export default Weather