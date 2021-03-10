const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'KeatonDev42420',
        database: 'borger_db',
    })
}

connection.connect((err) => {
    if (err) {
        console.error(`Connection Error: ${err.stack}`)
        return;
    }
    console.info(`Connection ID ${connection.threadId}`)
})

module.exports = connection;