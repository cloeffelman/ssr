import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'

require('../components/app.scss')

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
