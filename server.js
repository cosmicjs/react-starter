const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)
const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()
  server.get('*', (req, res) => handler(req, res))
  server.use(handler).listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})