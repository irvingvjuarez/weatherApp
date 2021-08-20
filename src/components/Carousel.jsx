import React from "react"
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import "./styles/Carousel.css"

class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // console.log(this.props.data)

        return(
            <article className="chart-container">
                <LineChart
                    width={830}
                    height={213}
                    data={this.props.data}
                    margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
                >

                    <Line type="monotone" dataKey={this.props.name} stroke="#8884d8" />
                    <CartesianGrid stroke="#fff" />
                    <XAxis dataKey="dt" name="time" interval={1}/>
                    <YAxis type="number" name={this.props.name} unit={this.props.unit}/>
                    <Tooltip />

                </LineChart>
            </article>
        )
    }
}

export default Carousel