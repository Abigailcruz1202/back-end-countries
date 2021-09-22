const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const country = require('./Country.js')
const activity = require('./Activity.js');
const todo = require('./GetAll')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', country)
router.use('/activity', activity)
router.use('/todo', todo)

 
module.exports = router;
