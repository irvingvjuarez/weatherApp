import React from "react"
import ReactDOM from "react-dom"
import App from "./routes/App"
import "./styles.css"

const root = document.querySelector("#root")

ReactDOM.render(<App/>, root)

/**sw registration for PWA */
if('serviceWorker' in navigator){
  navigator.serviceWorker.register("/sw.js")
    .catch(error => console.log(error.message))
}
