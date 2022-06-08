import React from "react"
import mapboxgl from 'mapbox-gl';
import LayersControl from "../LayersControl"
import LayersList from "../LayersList"

import 'mapbox-gl/dist/mapbox-gl.css';
import "../styles/Map.css"
import "../styles/LayersControl.css"

/**Services */
import { STYLE_URL, STARTING_ZOOM } from "./constants"
import { setuptOnLayerClicked, addSources } from "./services/handleLayers"
import { handleLayerClick } from "./services/handleEvents"

let map

class Map extends React.Component{
  constructor(props){
    super(props)
    this.coordinates = []
  }

  componentDidMount(){
    mapboxgl.accessToken = process.env.MapboxAPIKey;
    map = new mapboxgl.Map({
      container: 'map', // container ID
      style: STYLE_URL, // style URL
      center: [`${this.props.lon}`, `${this.props.lat}`], // starting position [lng, lat]
      zoom: STARTING_ZOOM // starting zoom
    });

    map.addControl(LayersControl, "bottom-right")
    map.addControl(LayersList, "bottom-right")

    map.on("load", () => {
      let layersBtn = document.querySelector(".layer-control-container")
      layersBtn.addEventListener("click", (e) => handleLayerClick(e, this))

      setuptOnLayerClicked(map)
      addSources(this, map)
    })
  }

  componentDidUpdate(){
    map.setCenter([`${this.props.lon}`, `${this.props.lat}`])
  }

  render(){
    return <div id="map" className="map-container"></div>
  }
}

export default Map
