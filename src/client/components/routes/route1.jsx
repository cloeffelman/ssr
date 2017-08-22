import React from 'react'
import {Helmet} from 'react-helmet'

const Route1 = () => (
  <div className="route-1">
    <div className="route-name">
      <h1>Route 1</h1>
    </div>
    <Helmet>
      <meta name="description" content="Route 1 description"/>
    </Helmet>
  </div>
)

export {Route1}
