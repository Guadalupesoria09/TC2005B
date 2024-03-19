const express = require('express');
const router = express.Router();
const construccionesController = 
    require('../controllers/construcciones.controller');
const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];
router.get('/construir', construccionesController.get_construir);

router.post('/construir', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});
router.get('/', (request, response, next) => {
    console.log('Ruta /');
    response.render('construcciones', {
      construcciones: construcciones,
  });
});
module.exports = router;