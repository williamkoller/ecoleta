const util = require('util')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'developer30',
  database: 'ecoleta',
  port: 5050,
})

module.exports = {
  openConnection: function openConnection() {
    connection.connect()
  },

  runQuery: function runQuery(sql, callback) {
    connection.query(sql, function (err, rows, fiels) {
      if (err) {
        console.error(sql)
        throw err
      }

      callback(err, rows, fiels)
    })
  },

  truncateData: function truncateData(callback) {
    const sql = 'TRUNCATE `ecoleta`.`places`'

    this.runQuery(sql, callback.bind(this))
  },

  createData: function createData(model, callback) {
    const sql = util.format(`INSERT INTO ecoleta.places (image, name, address, complement_number, state, city, items)
        VALUES ('https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'Colectoria', 'Guilherme Changretta, Jardim Jordão', '280', 'Santa Catarina', 'Rio do Sul', 'Resíduos Eletrônicos, Lâmpadas');
      `)

    this.runQuery(sql, callback.bind(this))
  },
}
