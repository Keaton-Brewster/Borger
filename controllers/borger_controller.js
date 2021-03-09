const express = require('express');

const route = express.Router();

const borger = require('../models/borger_model')

route.get('/', (req, res) => {
    borger.allBurgers((burgers) => {
        const data = {
            burgers: burgers
        }
        res.render('index', data)
    })
})

route.put('/api/consume/:id', (req, res) => {
    let id = req.params.id;

    borger.updateBurger({
        consumed: true
    }, id, (result) => {
        if (result.affectedRows === 0) {
            res.status(404).end();
        }
        res.status(202).end();
    })
})

route.post('/api/add-borger/:borger', (req, res) => {
    let borgerName = req.params.borger;
    console.log(borgerName)

    borger.addBurger(borgerName, (result) => {
        if (result.affectedRows === 0) {
            res.status(500).end();
        }
        res.status(201).end();
    })
})

module.exports = route;