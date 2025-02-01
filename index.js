import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/new', (req, res) => {
  res.send('new')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
