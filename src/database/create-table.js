const mysql = require('mysql')
const connection = mysql.createConnection({})
connection.connect()

connection.query(
  `
  INSERT INTO ecoleta.places (image, name, address, complement_number, state, city, items)
  VALUES ('https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'Colectoria', 'Guilherme Changretta, Jardim Jordão', '280', 'Santa Catarina', 'Rio do Sul', 'Resíduos Eletrônicos, Lâmpadas');
`,
  function (err, rows, fields) {
    if (err) {
      console.error(`Error: ${err}`)
    }
    console.log('It Works', rows, fields)
    connection.end()
  },
)
