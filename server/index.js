import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/components/app'
import template from './template'

const server = express(),
  port = 3000

server.use('/assets', express.static('assets'))

server.get('/', (req, res) => {
  const appString = renderToString(<App/>)

  res.send(template({
    body: appString,
    title: 'Test SSR'
  }))
})

console.log(`
-------------------------------
Server running on port | ${port}
-------------------------------
`)
server.listen(port)
