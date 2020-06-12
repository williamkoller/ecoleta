const express = require('express')
const server = express()
const db = require('./database/database')
const port = 3000
const desc = 'Server running on'
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.get('/', (req, res) => {
    res.render('index.html')
})

server.get('/create-point', (req, res) => {
    res.render('create-point.html')
})

server.post('/save-point', (req, res) => {
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        complement_number,
        state,
        city,
        items
        ) VALUES (?,?,?,?,?,?,?);
        `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.complement_number,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err) {
        if (err) {
            console.error(err)
            return res.send('Erro no cadastro')
        }
        console.log('Cadastrado com sucesso!', this)
        return res.render('create-point.html', { saved: true })
    }

    db.run(query, values, afterInsertData)
})

server.get('/search', (req, res) => {
    const search = req.query.search

    if (search == '') {
        return res.render('search-results.html', { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, (err, rows) => {
        if (err) {
            return console.error(err)
        }
        const total = rows.length
        return res.render('search-results.html', { places: rows, total })
    })
})

server.listen(port, () => {
    console.log(`${desc}: ${port}'`)
})