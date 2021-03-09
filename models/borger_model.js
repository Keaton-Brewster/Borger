const orm = require('../config/orm');

const borger = {
    allBurgers(cb) {
        orm.selectAll('burgers', (res) => cb(res))
    },
    addBurger(name, cb) {
        orm.insertOne('burgers', `name, consumed`, `"${name}", false`, (res) => cb(res))
    },
    updateBurger(objColValues, id, cb) {
        condition = `id = ${id}`
        orm.updateOne('burgers', objColValues, condition, (res) => cb(res))
    }
}

module.exports = borger;