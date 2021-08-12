import React from "react"
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
            <section className="weather-main">
                <article>
                    <div>
                        <BasicInfo />
                        <TempOverview />
                        <Carousel />
                    </div>

                    <div>

                    </div>
                </article>
            </section>
        )
    }
}

export default Weather