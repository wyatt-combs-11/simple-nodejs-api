const express = require('express')
require('dotenv').config()

const app = express()
const PORT = 4040

const cors = require('cors')
const { getMockChartData, createClient } = require('./mongoClient.js')

createClient()
app.use(cors())

app.get('/', (req, res) => {
  res.status(200)
  res.send('You have successfully hit the endpoint')
})

app.get('/ping', (req, res) => {
  res.status(200)
  res.send('pong')
})

app.get('/getData', async (req, res) => {
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  let data
  await getMockChartData().then(res => (data = res))

  res.json(data)
})

app.listen(PORT, error => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    )
  else console.log("Error occurred, server can't start", error)
})
