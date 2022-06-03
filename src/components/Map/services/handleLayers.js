import { LAYERS } from "../constants"

/**This method determines when a layer is clicked */
export const setuptOnLayerClicked = (mapElement) => {
  let layers = [...document.querySelectorAll(".list-item")]
  layers.forEach(item => item.addEventListener(
    "click",
    (e) => renderLayer(e, layers, mapElement)
  ))
}

const renderLayer = (e, layers, mapElement) => {
  let layerId = e.target.textContent

  layers.forEach(layer => {
    /**Action to add or remove a class from the layer */
    const action = layerId === layer.textContent ? "add" : "remove"
    layer.classList[action]("active")
  })

  activeLayer(layers, layerId, mapElement)
}

const activeLayer = (layers, layerId, mapElement) => {
  layers.forEach(layer => {
    /**Determining the action according to the layer id */
    if(layer.textContent !== "None"){

      /**If 'None' (status) is the layerId  */
      if(layerId !== "None"){
        const params = (layerId === layer.textContent)
          ? [layerId, 'visibility', 'visible']
          : [layer.textContent, 'visibility', 'none']
        mapElement.setLayoutProperty(...params);
      }else{
        mapElement.setLayoutProperty(layer.textContent, 'visibility', 'none')
      }
    }
  })
}

/**This method adds the  layers as a record to the Map component */
export const addSources = (mapComponent, mapElement) => {
  LAYERS.forEach(layer => {
    // "Map Zoom" -> map.style.z

    const xAxis = Math.abs(Math.round(mapComponent.props.lon))
    const yAxis = Math.abs(Math.round(mapComponent.props.lat))
    const LAYER_API = `https://tile.openweathermap.org/map/${layer.layer}/07/${xAxis}/${yAxis}.png?appid=${process.env.WeatherAPIKey}`
    mapElement.addSource(layer.id, {
      'type': 'raster',
      'tiles': [
        LAYER_API
      ]
    })
  })

  addLayers(LAYERS, mapElement)
}

const addLayers = (modifiedLayers, mapElement) => {
  modifiedLayers.forEach(layer => {
    mapElement.addLayer({
      'id': layer.id,
      'type': 'raster',
      'source': layer.id,
      'layout': {
        'visibility': 'none'
      }
    })
  })
}
