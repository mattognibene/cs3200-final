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
        name: "Tough Mushrooms",
        description: "Increases your defense.",
        minToPrepare: 20,
        rating: 4.3,
        ingredients: ["Ironshroom", "Hylian shroom"],
        steps: ["Put Shrooms in pot", "Some good shrooms"]
      },
      {
        name: "Shroom Kebab",
        description: "Restores 3 hearts.",
        minToPrepare: 30,
        rating: 3.2,
        ingredients: ["Ironshroom", "Hylian shroom", "Stamella shroom"],
        steps: ["Put shrooms in pot", "I like shrooms"]
      }
    ]
  }

  res.send(response)
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})