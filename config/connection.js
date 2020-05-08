const mysql = require('mysql2')

let  defaultConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Gjq.19901011',
  database: 'burgers_db'
}


if(process.env.JAWSDB_URL) defaultConfig = process.env.JAWSDB_URL


module.exports = mysql.createConnection(defaultConfig).promise()