import React from "react"
import Loader from "../components/Loader"
import Map from "../components/Map"
import BasicInfo from "../components/BasicInfo"
import Weather from "./Weather"

import "./styles/Home.css"

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { data, loading, error } = this.props.component.state

        if(loading){
            return(
                <Loader />
            )
        }else if(error){
            return(
                <h3>Error: {error.message}</h3>
            )
        }else{
            return(
                <section className="home-main">
                    <article className="home-main__info">
                        <Weather />
                    </article>

                    <article className="home-main__map">
                        <div className="home-main__map--basic-info-container">
                            <BasicInfo />
                        </div>
                        <Map lat={data.coord.lat} lon={data.coord.lon}/>
                    </article>
                </section>
            )
        }
    }
}

export default Home