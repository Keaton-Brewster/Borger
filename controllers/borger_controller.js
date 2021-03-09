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


module.exports = route;