const express = require('express');

const route = express.Router();

const burger = require('../models/burger_model')

route.get('/', (req, res) => {
    burger.allBurgers((err, burgers) => {
        if (err) throw err;

        const data = {
            burgers: burgers
        }
        res.render('index', data)
    })
})

route.put('/api/consume/:id', (req, res) => {
    let id = req.params.id;

    burger.updateBurger({
        consumed: true
    }, id, (err, result) => {
        if (err) throw err;

        if (result.affectedRows === 0) {
            res.status(404).end();
        }
        res.status(202).end();
    })
})

route.post('/api/add-borger', (req, res) => {
    let borgerName = req.body.borger;

    burger.addBurger(borgerName, (err, result) => {
        if (err) throw err;

        if (result.affectedRows === 0) {
            res.status(500).end();
        }
        res.status(201).end();
    })
})

module.exports = route;