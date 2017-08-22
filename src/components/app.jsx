import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import {Routes} from './routes/routes'
import {Menu} from './menu'

class App extends Component{
  render(){
    return(
      <div className="app">
        <div className="title"><h1>Test SSR</h1></div>
        <Helmet>
          <meta charSet="utf-8"/>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=2.5, user-scalable=1" name="viewport"/>
        </Helmet>
        <Menu/>
        <Routes/>
      </div>
    )
  }
}

export default App
