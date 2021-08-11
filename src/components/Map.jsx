import React from "react"
import "./styles/Map.css"

class Map extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXZqYyIsImEiOiJja3M2Z2ljcTIxNzBpMnByejZsaTFiOWdjIn0.qchk1ClOLnbqLwdLpOzSCg';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [`${this.props.lon}`, `${this.props.lat}`], // starting position [lng, lat]
            zoom: 16 // starting zoom
        });
    }

    render(){
        return(
            <div id="map" className="map-container"></div>
        )
    }
}

export default Map