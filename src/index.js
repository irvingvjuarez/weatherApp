import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./styles.css"
import getLocation from "./utils/getLocation"

const root = document.querySelector("#root")

ReactDOM.render(<App/>, root)
window.addEventListener("load", getLocation)