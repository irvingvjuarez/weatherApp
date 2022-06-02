/**This method determines when a layer is clicked */
export const setuptOnLayerClicked = (mapComponent, mapElement) => {
  let layers = [...document.querySelectorAll(".list-item")]
  layers.forEach(item => item.addEventListener(
    "click",
    (e) => renderLayer(e, mapComponent, layers, mapElement)
  ))
}

const renderLayer = (e, mapComponent, layers, mapElement) => {
  let layerId = e.target.textContent

  layers.forEach(layer => {
    /**Action to add or remove a class from the layer */
    const action = layerId === layer.textContent ? "add" : "remove"
    layer.classList[action]("active")
  })

  /**Determining params for method activeLayer */
  const params = layerId === "None" ? [false] : [true, layerId]
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
