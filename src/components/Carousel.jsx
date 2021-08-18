import React from "react"
import "./styles/Carousel.css"

class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <canvas id="chart"></canvas>
        )
    }
}

export default Carousel