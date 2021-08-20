import React from "react"
import "./styles/TempOverview.css"

class TempOverview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { temp, temp_max, temp_min } = this.props.temp

        return(
            <section className="tempOverview">
                <h2>{Math.round(temp)}°</h2>

                <article className="tempOverview__minmax">
                    <p className="max">{temp_max}°C</p>
                    <hr />
                    <p className="min">{temp_min}°C</p>
                </article>
            </section>
        )
    }
}

export default TempOverview