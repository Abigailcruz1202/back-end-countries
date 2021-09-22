const { Router } = require('express');
const axios = require('axios');
const { Country, Activity } = require('../db');

const router = Router();
// Nombre
// Dificultad
// Duración
// Temporada
router.post('/', async(req, res) => {
    const { nombre, dificultad,duracion, temporada, paises} = req.body;
    console.log( nombre, dificultad, duracion, temporada,'?',paises,'post activity??')
    try {
        const nuevaAct = await Activity.create({ nombre, dificultad, duracion, temporada })

        if (!Array.isArray(paises)) {
            const pais = await Country.findOne({
                where : { nombre : paises }
            })
            console.log('linea 21', pais)
            await nuevaAct.addCountry(pais)
            console.log('?')
            return res.send(nuevaAct)
        } else {
            paises.forEach(async(paiss) => {
                const pais = await Country.findAll({
                    where : { nombre : paiss }
                })
                await nuevaAct.addCountry(pais)
            })
            return res.send(nuevaAct)
        }
    } catch (err) {
        console.log('¡¿',err,'?')
        res.sendStatus(400)
    }
})

router.get('/todas', async(req,res)=>{
    let actividades = await Activity.findAll()
    // console.log('estoy en get actividades',actividades)
    res.send(actividades)
})

module.exports = router;
