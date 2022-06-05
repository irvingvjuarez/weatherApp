import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { initialState } from "../globalState"

import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Map from "../components/Map"
import NotFound from "../pages/NotFound"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = initialState(),
    this.flag = 0
  }

  render(){
    const { name, coord } = this.state.data

    return(
      <BrowserRouter>
        <Layout location={name} component={this} >
          <Switch>
            <Route exact path="/" render={() => <Home component={this} />}/>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route exact path="/map" render={() => <Map lat={coord.lat} lon={coord.lon}/>} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
