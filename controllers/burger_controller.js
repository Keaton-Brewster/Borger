const express = require('express');

const route = express.Router();

const burger = require('../models/burger_model')

route.get('/', (req, res) => {
    burger.allBurgers((burgers) => {
        const data = {
            burgers: burgers
        }
        res.render('index', data)
    }, (error) => {
        if (error) throw error
    })
})

route.put('/api/consume/:id', (req, res) => {
    let id = req.params.id;

    burger.updateBurger({
        consumed: true
    }, id, (result) => {
        if (result.affectedRows === 0) {
            res.status(404).end();
        }
        res.status(202).end();
    }, (error) => {
        if (error) throw error
    })
})

route.post('/api/add-borger', (req, res) => {
    let borgerName = req.body.borger;

    burger.addBurger(borgerName, (result) => {
        if (result.affectedRows === 0) {
            res.status(500).end();
        }
        res.status(201).end();
    }, (error) => {
        if (error) throw error
    })
})

module.exports = route;