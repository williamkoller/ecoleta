const mysql = require('./mysql').pool
const express = require('express')
const server = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
const routerPlaces = require('./routes/places')

server.use(morgan('dev'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.get('/', (req, res) => {
  res.render('index.html')
})

server.get('/create-point', (req, res) => {
  res.render('create-point.html')
})

server.use('', routerPlaces)

server.get('/search', (req, res) => {
  const search = req.query.search
  if (search == '') {
    return res.render('search-results.html', { total: 0 })
  }
  mysql.getConnection((error, conn) => {
    conn.query(
      `SELECT * FROM  ecoleta.places  WHERE city LIKE '%${search}%'`,
      (err, rows) => {
        if (err) {
          return console.error(err)
        }
        const total = rows.length
        return res.render('search-results.html', { places: rows, total })
      },
    )
  })
})

server.use((req, res, next) => {
  const erro = new Error('Not Found')
  erro.status = 404
  next(erro)
})

server.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res
    .send({
      erro: {
        message: error.message,
      },
    })
})

module.exports = server
