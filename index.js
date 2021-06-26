const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

app.use(cors())

app.use(express.static('build'))

app.get('/api/records', (request, response) => {
  fs.readFile('./database/db.json', (error, json) => {
    let obj = JSON.parse(json)['records']
    response.json(obj)
  })
})

app.get('/api/last-update', (request, response) => {
  fs.readFile('./database/db.json', (error, json) => {
    let obj = JSON.parse(json)['last-update-timestamp']
    response.json(obj)
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})