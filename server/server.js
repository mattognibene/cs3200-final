const express = require('express')
const app = express()
const port = 3001
const mysql = require('mysql')
const cors = require('cors')
// var config = require('./config.json');
//
//
// const connection = mysql.createConnection({
//   host: config.host,
//   user: config.user,
//   password: config.password,
//   database: config.database
// })
//
// connection.connect()
app.post('/recipe', cors(), (req, res) => {

  // connection.query('select * from invoices', function (err, rows, fields) {
  //   if (err) {
  //     console.log("err")
  //     console.log(err.message)
  //   }
  //
  //   console.log('The solution is: ', rows)
  // })

  const response = {
    recipes: [
      {
        name: "tough mushrooms",
        ingredients: ["ironshroom", "hylian shroom"],
        steps: ["put shrooms in pot", "some good shrooms"]
      },
      {
        name: "shroom kebab",
        ingredients: ["ironshroom", "hylian shroom", "stamella shroom"],
        steps: ["put shrooms in pot", "i like shrooms"]
      }
    ]
  }

  res.send(response)
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})