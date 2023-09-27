var express = require('express');
var router = express.Router();

let controller = require('../controllers/usuarioController')
/* GET users listing. */
router.get('/usuario', controller.getAllUsuario);
router.get('/usuario/:id', controller.getUsuarioByID);
router.post('/usuario', controller.addUsuario);
router.delete('/usuario/:id', controller.deleteUsuario);
router.put('/usuario/:id', controller.editeUsuario);

module.exports = router;