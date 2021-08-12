import "./styles/LayersControl.css"

var xCoord = []

class MapboxGLButtonControl {
    constructor({
        className = "",
        title = "",
        eventHandler = evtHndlr
    }) {
        this._className = className;
        this._title = title;
        this._eventHandler = eventHandler;
    }

    onAdd(map) {
        this._btn = document.createElement("button");
        this._btn.className = this._className
        this._btn.type = "button";
        this._btn.title = this._title;

        this._img = document.createElement("img")
        this._img.onclick = this._eventHandler;
        this._img.src="../assets/icons/layers.svg"
        this._img.classList.add("button-img")

        this._btn.appendChild(this._img)

        return this._btn;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

function clickHandler(e){
    let container = e.target.parentNode
    container.classList.add("layer-menu")
    container.innerHTML = `
        <ul class="list">
            <li>Temperature</li>
            <li>Wind speed</li>
            <li>Clouds</li>
            <li>Precipitation</li>
            <li>None</li>
        </ul>
        <div class="close-button">
            <div class="close-button-img"></div>
        </div>
    `

    let closeButton = document.querySelector(".close-button")
    closeButton.addEventListener("touchmove", handleMovement)
    closeButton.addEventListener("touchend", endTouch)
    closeButton.addEventListener("mousedown", handleMouseMovement)
    closeButton.addEventListener("mouseup", endTouch)
}

const endMouseMovemement = (e) => {
    e.target.removeEventListener("mousemove", handleMovement)
    endTouch(e)
}

const handleMouseMovement = (e) => {
    e.target.addEventListener("mousemove", handleMovement)
}

const handleMovement = (e) => {
    let xcoor = e.screenX || e.changedTouches[0].screenX
    xCoord.push(xcoor)

    if(xCoord.length > 0){
        let index = xCoord.length - 1

        if(xCoord[index] > xCoord[index - 1]){
            if(index < 35){
                e.target.style.marginLeft = `${index}px`
            }
        }
    }
}

const endTouch = (e) => {
    let container = e.target.parentNode.parentNode
    xCoord = []
    e.target.style.marginLeft = "0px"
    let children = [...container.children]

    setTimeout(() => {
        container.classList.remove("layer-menu")
        children.map(item => {
            item.style.display = "none"
        })
        // originalButton.style.zIndex = "1"
        container.classList.add("layer-control-container")
    }, 150)

    e.target.removeEventListener("mousemove", handleMovement)
}

const LayersControl = new MapboxGLButtonControl({
    className: "layer-control-container",
    title: "See layers",
    eventHandler: clickHandler
});

export default LayersControl