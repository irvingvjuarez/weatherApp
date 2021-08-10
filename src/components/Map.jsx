import React from "react"
import "./styles/Map.css"

class Map extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var mymap = L.map('map').setView([`${this.props.lat}`, `${this.props.lon}`], 13);

        L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/1/1/0@2x?access_token=pk.eyJ1IjoiaXZqYyIsImEiOiJja3M2Z2ljcTIxNzBpMnByejZsaTFiOWdjIn0.qchk1ClOLnbqLwdLpOzSCg", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
    }

    render(){
        return(
            <div id="map" className="map-container"></div>
        )
    }
}

export default Map