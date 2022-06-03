import { toggleMenu } from "../logic"

export const handleLayerClick = (e, map) => {
  const { target } = e
  const container = target.classList.contains("close-button") ? target.parentNode : target
  const closeBtn = container.childNodes[0]
  const layersList = document.querySelector(".layers-list")
  const isMenuDisplayed = container.classList.contains("layer-menu")

  toggleMenu(isMenuDisplayed, map, container, closeBtn, layersList)
}

export const mouseDown = (e, map) => {
  const { target } = e
  target.addEventListener("mousemove", (e) => moveHandler(e, map))
}

export const moveHandler = (e, map) => {
  const { target, changedTouches, screenX } = e
  const { coordinates, getRightBtn } = map

  let container = getRightBtn(target)
  let xcoord = screenX || changedTouches[0].screenX
  coordinates.push(xcoord)

  if(coordinates.length > 0){
    let index = coordinates.length - 1

    if(coordinates[index] > coordinates[index - 1]){
      if(index < 4){
        container.childNodes[0].style.left = `${index + 10}px`
      }else{
        container.childNodes[0].style.left = "0"
        container.click()
      }
    }
  }
}
