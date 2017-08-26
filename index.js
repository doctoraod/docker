const express = require('express')
const mysql = require('mysql')
const app = express()

var connection = mysql.createConnection({
  host     : process.env.DB_HOSTNAME,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

app.get('/', function (req, res) {
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    res.send('Welcome to API')
  });
})

app.get('/name', function (req, res) {
  res.send('Aod')
})

connection.connect(function(error) {
  if (error) throw error;
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
})