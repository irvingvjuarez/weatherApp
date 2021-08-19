import React from "react"
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
import "./styles/Carousel.css"

const data = [
    {time: "Now", temp: "15.3"},
    {time: "1pm", temp: "14.2"},
    {time: "2pm", temp: "20.3"},
    {time: "3pm", temp: "15"},
    {time: "4pm", temp: "14.5"}
]

class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article className="chart-container">
                <LineChart
                    width={330}
                    height={213}
                    data={data}
                    margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
                >

                    <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                    <CartesianGrid stroke="#fff" />
                    <XAxis dataKey="time" name="time"/>
                    <YAxis type="number" name="temp" unit="°"/>
                    <Tooltip />

                </LineChart>
            </article>
        )
    }
}

export default Carousel