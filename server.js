const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const controller = require('./maravilhosasController')

const app = express()

app.use(cors())

app.get('./', (req, res) => {
  const help = `
  <pre>
    Welcome to the Women API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /maravilhosas
    DELETE /maravilhosas/:id
    POST /maravilhosas { title, handle, avatarURL }
  </pre>
  `

  res.send(help)
})

app.get('/maravilhosas', (req, res) => {
  res.send(controller.getAll())
})

app.delete('/maravilhosas/:id', (req, res) => {
  res.send(controller.remove(req.params.id))
})

app.post('/maravilhosas', bodyParser.json(), (req, res) => {
  res.send(controller.add(req.body))
})

app.listen(config.port, () => {
  console.log('Server listening on port %, Ctrl+C to stop', config.port)
})
