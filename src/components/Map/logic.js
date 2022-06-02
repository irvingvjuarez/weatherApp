export const toggleMenu = (isMenuDisplayed, map, container, closeBtn, layersList) => {
  if(isMenuDisplayed){
    container.classList.remove("layer-menu")
    closeBtn.classList.add("hide")

    container.childNodes[0].removeEventListener("mousemove", map.moveHandler)
    container.removeEventListener("touchmove", map.moveHandler)

    layersList.classList.add("hide")

    map.coordinates = []
  }else{
    container.classList.add("layer-menu")
    closeBtn.classList.remove("hide")

    container.childNodes[0].addEventListener("mousedown", map.mouseDown)
    container.addEventListener("touchmove", map.moveHandler)

    layersList.classList.remove("hide")
  }
}
