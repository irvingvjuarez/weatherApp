import React from "react"
import mapboxgl from 'mapbox-gl';
import LayersControl from "../LayersControl"
import LayersList from "../LayersList"

import 'mapbox-gl/dist/mapbox-gl.css';
import "../styles/Map.css"
import "../styles/LayersControl.css"

/**Services */
import { LAYERS, STYLE_URL, STARTING_ZOOM } from "./constants"
import { toggleMenu } from "./logic"
import { setuptOnLayerClicked, addSources } from "./services/handleLayers"

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
      layersBtn.addEventListener("click", this.handleLayersBtnClick)

      setuptOnLayerClicked(this, map)
      addSources(this, map)
    })
  }

  getRightBtn = (target) => {
    if(target.classList.contains("close-button")) return target.parentNode
    return target
  }

  handleLayersBtnClick = (e) => {
    const container = this.getRightBtn(e.target)
    const closeBtn = container.childNodes[0]
    const layersList = document.querySelector(".layers-list")
    const isMenuDisplayed = container.classList.contains("layer-menu")

    toggleMenu(isMenuDisplayed, this, container, closeBtn, layersList)
  }

  mouseDown = (e) => {
    const { target } = e
    target.addEventListener("mousemove", this.moveHandler)
  }

  moveHandler = (e) => {
    const { target, changedTouches, screenX } = e
    const { coordinates, getRightBtn, moveEnd } = this

    let container = getRightBtn(target)
    let xcoord = screenX || changedTouches[0].screenX
    coordinates.push(xcoord)

    if(coordinates.length > 0){
      let index = coordinates.length - 1

      if(coordinates[index] > coordinates[index - 1]){
        if(index < 4){
          container.childNodes[0].style.left = `${index + 10}px`
        }else{
          moveEnd(container)
        }
      }
    }
  }

  moveEnd = (btn) => {
    btn.childNodes[0].style.left = "0"
    btn.click()
  }

  componentDidUpdate(){
    map.setCenter([`${this.props.lon}`, `${this.props.lat}`])
  }

  render(){
    return <div id="map" className="map-container"></div>
  }
}

export default Map
