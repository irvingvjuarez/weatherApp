import React from "react"
import mapboxgl from 'mapbox-gl';
import LayersControl from "./LayersControl"
import LayersList from "./LayersList"

import 'mapbox-gl/dist/mapbox-gl.css';
import "./styles/Map.css"
import "./styles/LayersControl.css"

var map, toggleLayersIds = [
    {id: "Temperature", layer: "temp_new"},
    {id: "Wind speed", layer: "wind_new"},
    {id: "Cloudiness", layer: "clouds_new"},
    {id: "Precipitation", layer: "precipitation_new"}
]

class Map extends React.Component{
    constructor(props){
        super(props)
        this.coordinates = []
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXZqYyIsImEiOiJja3M2Z2ljcTIxNzBpMnByejZsaTFiOWdjIn0.qchk1ClOLnbqLwdLpOzSCg';
        map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/dark-v10', // style URL
            center: [`${this.props.lon}`, `${this.props.lat}`], // starting position [lng, lat]
            zoom: 7 // starting zoom
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

        items.map(item => {
            item.addEventListener("click", this.setLayer)
        })
    }

    setLayer = (e) => {
        let layerId = e.target.textContent
        let arr = [...document.querySelectorAll(".list-item")]

        arr.map(layer => {
            if(layerId === layer.textContent){
                layer.classList.add("active")
            }else{
                layer.classList.remove("active")
            }
        })

        if(layerId === "None"){
            this.turningOnLayer(arr, false)
        }else{
            this.turningOnLayer(arr, true, layerId)
        }
    }

    turningOnLayer = (arr, status, benchmark) => {
        arr.map(layer => {
            if(layer.textContent != "None"){
                if(status){
                    if(benchmark === layer.textContent){
                        map.setLayoutProperty(benchmark, 'visibility', 'visible');
                    }else{
                        map.setLayoutProperty(layer.textContent, 'visibility', 'none');
                    }
                }else{
                    map.setLayoutProperty(layer.textContent, 'visibility', 'none')
                }
            }
        })
    }

    addSources = () => {
        toggleLayersIds.map(layer => {
            map.addSource(layer.id, {
                'type': 'raster',
                'tiles': [
                    `${process.env.MapTileAPI.replace("LAYER", layer.layer)}`
                ]
            })
        })

        this.addLayers()
    }

    addLayers = () => {
        toggleLayersIds.map(layer => {
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
        if(target.classList.contains("close-button")){
            return target.parentNode
        }else{
            return target
        }
    }

    handleLayersBtnClick = (e) => {
        let container = this.getRightBtn(e.target)
        let closeBtn = container.childNodes[0]
        let layersList = document.querySelector(".layers-list")

        if(container.classList.contains("layer-menu")){
            container.classList.remove("layer-menu")
            closeBtn.classList.add("hide")

            container.childNodes[0].removeEventListener("mousemove", this.moveHandler)
            container.removeEventListener("touchmove", this.moveHandler)

            layersList.classList.add("hide")

            this.coordinates = []
        }else{
            container.classList.add("layer-menu")
            closeBtn.classList.remove("hide")

            container.childNodes[0].addEventListener("mousedown", this.mouseDown)
            container.addEventListener("touchmove", this.moveHandler)

            layersList.classList.remove("hide")
        }
    }

    mouseDown = (e) => {
        let container = e.target

        container.addEventListener("mousemove", this.moveHandler)
    }

    moveHandler = (e) => {
        let container = this.getRightBtn(e.target)
        let xcoord = e.screenX || e.changedTouches[0].screenX
        this.coordinates.push(xcoord)
        
        if(this.coordinates.length > 0){
            let index = this.coordinates.length - 1
    
            if(this.coordinates[index] > this.coordinates[index - 1]){
                if(index < 15){
                    container.childNodes[0].style.left = `${index + 10}px`
                }else{
                    this.moveEnd(container)
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
        return(
            <div id="map" className="map-container"></div>
        )
    }
}

export default Map