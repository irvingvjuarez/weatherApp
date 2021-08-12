import "./styles/LayersControl.css"

var xCoord = []

class MapboxGLButtonControl {
    constructor({
        className = "",
        title = "",
    }) {
        this._className = className;
        this._title = title
    }

    onAdd(map) {
        this._btn = document.createElement("button");
        this._btn.className = this._className
        this._btn.title = this._title;

        this._closeBtn = document.createElement("div")
        this._closeBtn.className = "close-button hide"

        this._btn.appendChild(this._closeBtn)

        return this._btn;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
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

        container.innerHTML = `
            <img src="../assets/icons/layers.svg" class="button-img"/>
        `

        container.classList.add("layer-control-container")
    }, 150)

    e.target.removeEventListener("mousemove", handleMovement)
}

const LayersControl = new MapboxGLButtonControl({
    className: "layer-control-container",
    title: "See layers"
});

export default LayersControl