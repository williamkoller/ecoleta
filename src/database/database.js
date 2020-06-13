// const database = require('sqlite3').verbose()

// const db = new database.Database('./src/database/database.db')

// // db.serialize(() => {
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             complement_number TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //             )
// //             `)
// //     const query = `
// //         INSERT INTO places (
// //             image,
// //             name,
// //             address,
// //             complement_number,
// //             state,
// //             city,
// //             items
// //             ) VALUES (?,?,?,?,?,?,?)
// //             `
// //     const values = [
// //         'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// //         'Colectoria',
// //         'Guilherme Changretta, Jardim Jordão',
// //         '280',
// //         'Santa Catarina',
// //         'Rio do Sul',
// //         'Resíduos Eletrônicos, Lâmpadas',
// //     ]

// //     function afterInsertData(err) {
// //         if (err) {
// //             return console.error(err)
// //         }
// //         console.log('Cadastrado com sucesso!', this)
// //     }
// //     db.run(query, values, afterInsertData)
// //         // db.run(`DELETE FROM places`, (err) => {
// //         //         if (err) {
// //         //             return console.error(err)
// //         //         }
// //         //         console.log('Seu registro foi deletado')
// //         //     })
// //     db.all(`SELECT * FROM places`, function(err, rows) {
// //         if (err) {
// //             return console.error(err)
// //         }
// //         console.log('Aqui estão seus registros: ', rows)
// //     })
// // })

// module.exports = db