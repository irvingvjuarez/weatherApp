import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { initialState } from "../globalState"

import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Weather from "../pages/Weather"
import NotFound from "../pages/NotFound"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = initialState(),
    this.flag = 0
  }

  render(){
    const { name } = this.state.data

    return(
      <BrowserRouter>
        <Layout location={name} component={this} >
          <Switch>
            <Route exact path="/" render={() => <Home component={this} />}/>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route exact path="/weather-info" render={() => <Weather state={this.state} />} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
