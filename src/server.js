const express = require('express')
const server = express()
const port = 3000
const desc = 'Server running on'
server.use(express.static('public'))


const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server.get('/', (req, res) => {
  res.render('index.html')
})

server.get('/create-point', (req, res) => {
  res.render('create-point.html')
})

server.get('/search', (req, res) => {
  res.render('search-results.html')
})

server.listen(port, () => {
  console.log(`${desc}: ${port}`)
})