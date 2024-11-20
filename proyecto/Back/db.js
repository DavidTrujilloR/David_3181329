const mysql = require('mysql2/promise');

const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Tina1203#',
  database: 'db',
};

const db = mysql.createPool(dbConfig);

module.exports = db;