import React from "react"
import BasicInfo from "../components/BasicInfo"
import TempOverview from "../components/TempOverview"
import Carousel from "../components/Carousel"

class Weather extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section>
                <article>
                    <BasicInfo />
                    <TempOverview />
                    <Carousel />
                </article>

                <article>

                </article>
            </section>
        )
    }
}

export default Weather