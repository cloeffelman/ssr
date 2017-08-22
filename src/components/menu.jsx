import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => (
  <div className="menu">
    <Link className="item" to={'/'}>Home</Link>
    <Link className="item" to={'/route1'}>Route 1</Link>
    <Link className="item" to={'/route2'}>Route 2</Link>
  </div>
)

export {Menu}
