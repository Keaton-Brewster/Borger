const orm = require('../config/orm');

const burger = {
    allBurgers(cb) {
        orm.selectAll('burgers', (err, res) => cb(err, res))
    },
    addBurger(name, cb) {
        orm.insertOne('burgers', `name, consumed`, `"${name}", false`, (err, res) => cb(err, res))
    },
    updateBurger(objColValues, id, cb) {
        condition = `id = ${id}`
        orm.updateOne('burgers', objColValues, condition, (err, res) => cb(err,res))
    }
}

module.exports = burger;