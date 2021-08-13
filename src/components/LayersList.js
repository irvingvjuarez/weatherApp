import "./styles/LayersList.css"

class List {
    constructor(className) {
        this._className = className;
        this.layers = ["Temperature", "Wind speed", "Cloudiness", "Precipitation", "None"]
    }

    onAdd(map) {
        this._container = document.createElement("div")
        this._container.className = this._className

        for(let item of this.layers){
            let h3 = document.createElement("h3")
            h3.className = "list-item"
            h3.textContent = item

            this._container.appendChild(h3)
        }

        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

const LayersList = new List("layers-list");

export default LayersList