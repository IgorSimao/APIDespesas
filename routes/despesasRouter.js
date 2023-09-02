var express = require('express');
var router = express.Router();

let controller = require('../controllers/despesasController')
/* GET users listing. */
router.get('/', controller.getAllDespesas)

module.exports = router;