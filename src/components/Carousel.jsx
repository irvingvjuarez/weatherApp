import React from "react"
import getHourFormat from "../utils/getHourFormat";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
import "./styles/Carousel.css"

class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const componentData = [...this.props.data]
        componentData.map(item => {
            let hourFormat = getHourFormat(item.dt)
            item.dt = hourFormat
        })

        console.log(componentData)

        return(
            <article className="chart-container">
                <LineChart
                    width={830}
                    height={213}
                    data={componentData}
                    margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
                >

                    <Line type="monotone" dataKey={this.props.name} stroke="#8884d8" />
                    <CartesianGrid stroke="#fff" />
                    <XAxis dataKey="dt" name="time"/>
                    <YAxis type="number" name={this.props.name} unit={this.props.unit}/>
                    <Tooltip />

                </LineChart>
            </article>
        )
    }
}

export default Carousel