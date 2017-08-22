import React from 'react'
import {Helmet} from 'react-helmet'

const Home = () => (
  <div className="Home">
    <div className="route-name">
      <h1>Home</h1>
    </div>
    <Helmet>
      <meta name="description" content="Home description"/>
    </Helmet>
  </div>
)

export {Home}
