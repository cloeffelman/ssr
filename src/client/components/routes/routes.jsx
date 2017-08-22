import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {Home} from './home'
import {Route1} from './route1'
import {Route2} from './route2'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/route1' component={Route1}/>
    <Route exact path='/route2' component={Route2}/>
  </Switch>
)

export {Routes}
