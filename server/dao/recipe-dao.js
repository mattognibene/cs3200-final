const mysql = require('mysql')
const config = require('../config.json');

class RecipeDao {

    constructor() {
      this.connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
      })
      this.connection.connect()
    }

    // sample
    getInvoices() {
      var result;
      this.connection.query('select * from invoices', function (err, rows, fields) {
          if (err) throw err
          result = rows
      }) 
      return result
    }

}

module.exports = RecipeDao