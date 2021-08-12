import React from "react"
import "./styles/Carousel"

class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section>
                <h2>Title</h2>
                <canvas id="chart"></canvas>
            </section>
        )
    }
}

export default Carousel