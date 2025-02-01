import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ping', (req, res) => {
  res.send('pon g')
})

app.get('/new', (req, res) => {
  res.status(201).send('new')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
