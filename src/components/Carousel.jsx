import React from "react"
import "./styles/Carousel.css"

class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="carousel-main">
                <h2>Title</h2>
                <canvas className="chart"></canvas>
            </section>
        )
    }
}

export default Carousel