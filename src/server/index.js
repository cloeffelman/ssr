import express from 'express'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from '../client/components/app'
import template from './template'
import Helmet from 'react-helmet'

const server = express(),
  port = 3000

server.use('/assets', express.static(__dirname + '/assets'))

server.get('*', (req, res) => {
  const context = {}
  const body = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic()

  res.send(template({
    body,
    title: 'Test SSR',
    helmet
  }))
})

console.log(`
-------------------------------
Server running on port | ${port}
-------------------------------
`)
server.listen(port)
