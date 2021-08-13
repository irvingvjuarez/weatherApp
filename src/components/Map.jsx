import React from "react"
import mapboxgl from 'mapbox-gl';
import LayersControl from "./LayersControl"

import 'mapbox-gl/dist/mapbox-gl.css';
import "./styles/Map.css"
import "./styles/LayersControl.css"

class Map extends React.Component{
    constructor(props){
        super(props)
        this.coordinates = []
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXZqYyIsImEiOiJja3M2Z2ljcTIxNzBpMnByejZsaTFiOWdjIn0.qchk1ClOLnbqLwdLpOzSCg';
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [`${this.props.lon}`, `${this.props.lat}`], // starting position [lng, lat]
            zoom: 14 // starting zoom
        });

        map.addControl(LayersControl, "bottom-right")

        map.on("load", () => {
            let triggerBtn = document.querySelector(".layer-control-container")
            triggerBtn.addEventListener("click", this.triggerLayerMenu)
        })
    }

    getRightBtn = (target) => {
        if(target.classList.contains("close-button")){
            return target.parentNode
        }else{
            return target
        }
    }

    triggerLayerMenu = (e) => {
        let container = this.getRightBtn(e.target)

        let closeBtn = container.childNodes[0]

        if(container.classList.contains("layer-menu")){
            container.classList.remove("layer-menu")
            closeBtn.classList.add("hide")

            container.childNodes[0].removeEventListener("mousemove", this.moveHandler)
            container.removeEventListener("touchmove", this.moveHandler)
            this.coordinates = []
        }else{
            container.classList.add("layer-menu")
            closeBtn.classList.remove("hide")

            container.childNodes[0].addEventListener("mousedown", this.mouseDown)
            container.addEventListener("touchmove", this.moveHandler)
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