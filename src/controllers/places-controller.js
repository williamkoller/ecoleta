const express = require('express')
const app = express()
const mysql = require('../mysql').pool
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: app,
  noCache: true,
})

exports.getPlaces = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error })
    }

    conn.query('SELECT * FROM ecoleta.places', (error, result, fields) => {
      if (error) {
        return res.status(500).send({ error: error })
      }
      const response = {
        amount: result.length,
        places: result.map((place) => {
          return {
            id: place.id,
            image: place.image,
            name: place.name,
            address: place.address,
            complement_number: place.complement_number,
            state: place.state,
            city: place.city,
            items: place.items,
            request: {
              type: 'GET',
              desc: 'Return the details of places',
            },
          }
        }),
      }
      return res.status(200).send(response)
    })
  })
}

exports.postPlaces = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    conn.query(
      'INSERT INTO ecoleta.places (image, name, address, complement_number, state, city, items) VALUES (?,?,?,?,?,?,?)',
      [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.complement_number,
        req.body.state,
        req.body.city,
        req.body.items,
      ],

      (error, result, field) => {
        conn.release()
        if (error) {
          return res.status(500).send({ error: error })
        }
        return res.status(202).render('create-point.html', { saved: true })
      },
    )
  })
}
