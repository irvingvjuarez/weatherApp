export const toggleMenu = (isMenuDisplayed, map, container, closeBtn, layersList) => {
  let menuAction = "add"
  let btnAction = "remove"
  let mouseEvent = {
    action: "",
    listener: "mousemove",
    callback: map.moveHandler
  }
  let touchMoveAction
  let layerListAction

  if(isMenuDisplayed){
    menuAction = "remove"
    btnAction = "add"
    mouseEvent.listener = "mousedown"

    map.coordinates = []
  }

  touchMoveAction = btnAction
  layerListAction = menuAction

  mouseEvent.callback = map.mouseDown
  mouseEvent.action = btnAction

  /**Here the actual actions start */
  container.classList[menuAction]("layer-menu")
  closeBtn.classList[btnAction]("hide")

  const { action, listener, callback } = mouseEvent
  const eventListenerTitle = `${action}EventListener`
  console.log("event title", eventListenerTitle)

  container.childNodes[0][eventListenerTitle](listener, callback)
  container[`${touchMoveAction}EventListener`]("touchmove", map.moveHandler)
  layersList.classList[layerListAction]("hide")
}
