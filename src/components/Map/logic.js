import { moveHandler, mouseDown } from "./services/handleEvents"

export const toggleMenu = (isMenuDisplayed, map, container, closeBtn, layersList) => {
  if(isMenuDisplayed){
    container.classList.remove("layer-menu")
    closeBtn.classList.add("hide")

    container.childNodes[0].removeEventListener("mousemove", (e) => moveHandler(e, map))
    container.removeEventListener("touchmove", (e) => moveHandler(e, map))

    layersList.classList.add("hide")

    map.coordinates = []
  }else{
    container.classList.add("layer-menu")
    closeBtn.classList.remove("hide")

    container.childNodes[0].addEventListener("mousedown", (e) => mouseDown(e, map))
    container.addEventListener("touchmove", (e) => moveHandler(e, map))

    layersList.classList.remove("hide")
  }
}
