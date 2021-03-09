const conn = require('./connection');

const objToSql = (ob) => {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string') {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
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