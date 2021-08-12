import React from "react"
import "./styles/TempOverview.css"

class TempOverview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="tempOverview">
                <h2>15°</h2>

                <article>
                    <p>16.64°C</p>
                    <hr />
                    <p>13.97°C</p>
                </article>
            </section>
        )
    }
}

export default TempOverview