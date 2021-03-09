const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'KeatonDev42420',
    database: 'borger_db',
})

connection.connect((err) => {
    if (err) {
        console.log(`Connection Error: ${err.stack}`)
        return;
    }
    console.log(`Connection ID ${connection.threadId}`)
})

module.exports = connection;