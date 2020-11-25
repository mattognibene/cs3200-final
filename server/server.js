const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
var config = require('./config.json');


const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

connection.connect()

app.get('/', (req, res) => {

  connection.query('select * from invoices', function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }

    console.log('The solution is: ', rows)
  })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})