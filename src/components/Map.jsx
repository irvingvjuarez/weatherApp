import React from "react"
import "./styles/Map.css"

class Map extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var mymap = L.map('map').setView([`${this.props.lat}`, `${this.props.lon}`], 13);
    }

    render(){
        return(
            <div id="map" className="map-container"></div>
        )
    }
}

export default Map