const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'führerschein',
    user: 'root',
    password: '123456'
})

module.exports = pool.promise(); 



