import React from "react"
import "./styles/About.css"

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="about-main">
                <p>
                    <em>The Weather App</em> was created with the purpose to inform about climatic information all around the world.
                    <br /> <br />
                    Among the main features, you can see the Temperature, Cloudiness, Wind speed and Precipitation of the searched place, as well as check out the temperature and rain probability over next 24 hours.
                    <br /><br />
                    You can keep informed about the weather everywhere around the world.
                </p>

                <h2>Where all the data comes from?</h2>
                <p>
                    We use the <a href="https://openweathermap.org/">openweathermap</a> API to help us getting the data we need to show it to you in a human-friendly way.
                </p>

                <h2>Contribute to the project</h2>
                <p>
                    In case you want to help to make this weather app better, you can make a pull request or mark an issue at the <a href="https://github.com/IrvingJuarez/weatherApp">github repository</a>. 
                    <br /><br />
                    All support will be appreciated, specificly about the internationalization of the app and improvements in the accesibility.
                </p>
            </div>
        )
    }
}

export default About