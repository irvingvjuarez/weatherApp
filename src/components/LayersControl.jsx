import "./styles/LayersControl.css"

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
        this._btn.className = "layer-control-container"
        this._btn.type = "button";
        this._btn.title = this._title;
        this._btn.onclick = this._eventHandler;

        this._img = document.createElement("img")
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
    console.log(e)
}

const LayersControl = new MapboxGLButtonControl({
    className: "",
    title: "See layers",
    eventHandler: clickHandler
});

export default LayersControl