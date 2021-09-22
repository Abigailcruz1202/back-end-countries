const { Router } = require('express');
const axios = require('axios');
// Imagen de la bandera
// Nombre
// Continente
const { Country, Activity } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    console.log('estoy en /todo')
    let pais = await Country.findAll({
        order:[['nombre','ASC']],
        include: [Activity]
    })
    console.log('??',pais.length,'?')
    res.status(200).send(pais)
})

module.exports = router;