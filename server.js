const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./MaravilhosasController')

controller.get()

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/maravilhosa/m-de-maravilhosa-integracao-api', (req, res) => {
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

app.get('/maravilhosa/m-de-maravilhosa-integracao-api', (req, res) => {
  res.send(controller.get(req.token))
})

app.post('/maravilhosa/m-de-maravilhosa-integracao-api', bodyParser.json(), (req, res) => {
  res.send(controller.add(req.token, req.body))
})

app.delete('/maravilhosa/m-de-maravilhosa-integracao-api/:id', (req, res) => {
  res.send(controller.remove(req.token, req.params.id))
})

app.listen(5001, () => {
  console.log('Server listening on port 5001, Ctrl+C to stop', 5001)
})
