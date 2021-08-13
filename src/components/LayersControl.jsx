import "./styles/LayersControl.css"

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

        this._btn.append(this._closeBtn)

        return this._btn;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

const LayersControl = new MapboxGLButtonControl({
    className: "layer-control-container",
    title: "See layers"
});

export default LayersControl