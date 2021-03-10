const orm = require('../config/orm');

const burger = {
    allBurgers(cb, error) {
        orm.selectAll('burgers',
            (res) => cb(res),
            (err) => error(err))
    },
    addBurger(name, cb, error) {
        orm.insertOne('burgers', `name, consumed`, `"${name}", false`,
            (res) => cb(res),
            (err) => error(err))
    },
    updateBurger(objColValues, id, cb, error) {
        condition = `id = ${id}`
        orm.updateOne('burgers', objColValues, condition,
            (res) => cb(res),
            (err) => error(err))
    }
}

module.exports = burger;