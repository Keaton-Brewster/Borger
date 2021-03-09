const orm = require('../config/orm');

const borger = {
    addBurger(name, consumed, cb) {
        orm.insertOne('burgers', `name, consumed`, `"${name}", ${consumed}`, (res) => {
            cb(res)
        })
    }
}

module.exports = borger;