import React from "react"
import mapboxgl from 'mapbox-gl';
import LayersControl from "./LayersControl"
import LayersList from "./LayersList"

import 'mapbox-gl/dist/mapbox-gl.css';
import "./styles/Map.css"
import "./styles/LayersControl.css"

var map

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

        if(layerId === "None"){
            e.target.classList.add("active")
            arr.map(layer => {
                if(layer.textContent != "None"){
                    layer.classList.remove("active")
                    map.setLayoutProperty(layer.textContent, 'visibility', 'none')
                }
            })
        }else{
            arr.map(layer => {
                if(layer.textContent != "None"){
                    if(layerId === layer.textContent){
                        layer.classList.add("active")
                        map.setLayoutProperty(layerId, 'visibility', 'visible');
                    }else{
                        layer.classList.remove("active")
                        map.setLayoutProperty(layer.textContent, 'visibility', 'none');
                    }
                }
            })
        }
    }

    addSources = () => {
        map.addSource('Temperature', {
            'type': 'raster',
            'tiles': [
            'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=51e2f79a6ef7e59aa6374290d6ab52dc'
            ]
        })

        map.addSource('Wind speed', {
            'type': 'raster',
            'tiles': [
            'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=51e2f79a6ef7e59aa6374290d6ab52dc'
            ]
        })

        map.addSource('Cloudiness', {
            'type': 'raster',
            'tiles': [
            'https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=51e2f79a6ef7e59aa6374290d6ab52dc'
            ]
        })

        map.addSource('Precipitation', {
            'type': 'raster',
            'tiles': [
            'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=51e2f79a6ef7e59aa6374290d6ab52dc'
            ]
        })

        this.addLayers()
    }

    addLayers = () => {
        map.addLayer({
            'id': 'Temperature',
            'type': 'raster',
            'source': 'Temperature',
            'layout': {
                'visibility': 'none'
            }
        })

        map.addLayer({
            'id': 'Wind speed',
            'type': 'raster',
            'source': 'Wind speed',
            'layout': {
                'visibility': 'none'
            }
        })

        map.addLayer({
            'id': 'Cloudiness',
            'type': 'raster',
            'source': 'Cloudiness',
            'layout': {
                'visibility': 'none'
            }
        })

        map.addLayer({
            'id': 'Precipitation',
            'type': 'raster',
            'source': 'Precipitation',
            'layout': {
                'visibility': 'none'
            }
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
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [`${this.props.lon}`, `${this.props.lat}`], // starting position [lng, lat]
            zoom: 14,  // starting zoom
        });
    }

    render(){
        return(
            <div id="map" className="map-container"></div>
        )
    }
}

export default Map