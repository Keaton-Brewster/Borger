const conn = require('./connection');

const objToSql = (ob) => {
    const arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(`${key}=${value}`);
        }
    }
    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

const orm = {
    selectAll(table, cb) {
        let queryString = `SELECT * FROM ${table}`;

        conn.query(
            queryString,
            (err, result) => {
                if (err) throw err;

                cb(result)
            }
        )
    },
    insertOne(table, colValues, valsToInsert, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += ` (${colValues}) `;
        queryString += ` VALUES `;
        queryString += `(${valsToInsert})`;

        conn.query(
            queryString,
            (err, result) => {
                if (err) throw err;
                cb(result)
            }
        )
    },
    updateOne(table, objColValues, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColValues);
        queryString += ' WHERE ';
        queryString += condition;

        conn.query(
            queryString,
            (err, result) => {
                if (err) throw err;

                cb(result)
            }
        )
    }
}

module.exports = orm;