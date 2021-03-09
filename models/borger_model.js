const orm = require('../config/orm');

const borger = {
    allBurgers(cb) {
        orm.selectAll('burgers', (res) => cb(res))
    },
    addBurger(name, consumed, cb) {
        orm.insertOne('burgers', `name, consumed`, `"${name}", ${consumed}`, (res) => cb(res))
    },
    updateBurger(objColValues, id, cb) {
        condition = `id = ${id}`
        orm.updateOne('burgers', objColValues, condition, (res) => cb(res))
    }
}

module.exports = borger;