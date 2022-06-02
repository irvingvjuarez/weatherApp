import React from "react"
import mapboxgl from 'mapbox-gl';
import LayersControl from "../LayersControl"
import LayersList from "../LayersList"

import 'mapbox-gl/dist/mapbox-gl.css';
import "../styles/Map.css"
import "../styles/LayersControl.css"

import { layers, STYLE_URL, STARTING_ZOOM } from "./constants"
import { toggleMenu } from "./logic"

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

      this.setuptLayersIds()
      this.addSources()
    })
  }

  setuptLayersIds = () => {
    let items = [...document.querySelectorAll(".list-item")]
    items.forEach(item => item.addEventListener("click", this.setLayer))
  }

  setLayer = (e) => {
    let layerId = e.target.textContent
    let layers = [...document.querySelectorAll(".list-item")]

    layers.forEach(layer => {
      /**Action to add or remove a class from the layer */
      const action = layerId === layer.textContent ? "add" : "remove"
      layer.classList[action]("active")
    })

    /**Determining params for method turningOnLayer */
    const params = layerId === "None" ? [false] : [true, layerId]
    this.turningOnLayer(layers, ...params)
  }

  turningOnLayer = (layers, status, layerId) => {
    layers.forEach(layer => {
      /**Determining the action according to the layer id */
      if(layer.textContent !== "None"){

        /**If 'None' (status) is the layerId  */
        if(status){
          const params = (layerId === layer.textContent)
            ? [layerId, 'visibility', 'visible']
            : [layer.textContent, 'visibility', 'none']
          map.setLayoutProperty(...params);
        }else{
          map.setLayoutProperty(layer.textContent, 'visibility', 'none')
        }
      }
    })
  }

  addSources = () => {
    layers.forEach(layer => {
      // "Map Zoom" -> map.style.z

      const xAxis = Math.abs(Math.round(this.props.lon))
      const yAxis = Math.abs(Math.round(this.props.lat))
      const LAYER_API = `https://tile.openweathermap.org/map/${layer.layer}/07/${xAxis}/${yAxis}.png?appid=${process.env.WeatherAPIKey}`
      map.addSource(layer.id, {
        'type': 'raster',
        'tiles': [
          LAYER_API
        ]
      })
    })

    this.addLayers()
  }

  addLayers = () => {
    layers.forEach(layer => {
      map.addLayer({
        'id': layer.id,
        'type': 'raster',
        'source': layer.id,
        'layout': {
          'visibility': 'none'
        }
      })
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
