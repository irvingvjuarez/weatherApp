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
        const { weather, sys, timezone_offset, main, wind, daily, hourly } = this.props.state.data
        let sentHourly = []
        for(let i = 0; i < 24; i++){
            sentHourly.push(hourly[i])
        }
        console.log(sentHourly)

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
    
                    <Section title="Temperature over next 24hrs">
                        <Carousel data={sentHourly} unit="°" name="temp"/>
                    </Section>
    
                    <Section title="Details">
                        <section className="details-container">
                            <DetailCard title="Humidity" value={main.humidity} units="%" img="../assets/icons/humidity.png"/>
                            <DetailCard title="Pressure" value={main.pressure} units="hPa" img="../assets/icons/gauge.png"/>
                            <DetailCard title="Wind speed" value={wind.speed} units="m/s" img="../assets/icons/wind.png"/>
                        </section>
                    </Section>
    
                    <Section title="Rain probability over next 24hrs">
                        <Carousel data={sentHourly} unit="%" name="pop"/>
                    </Section>
    
                    <Section title="Next 7 days">
                        <section className="dayly-forecast-container">
                            {daily.map(day => {
                                if(day != daily[0]){
                                    return (<DayForecast key={day.dt} forecast={day}/>)
                                }
                            })}
                        </section>
                    </Section>
                </section>
            )
        }
    }
}

export default Weather