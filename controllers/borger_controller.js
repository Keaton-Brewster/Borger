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
        res.status(200).end();
    })
})

module.exports = route;