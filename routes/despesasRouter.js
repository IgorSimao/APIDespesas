var express = require('express');
var router = express.Router();

let controller = require('../controllers/despesasController')
/* GET users listing. */
router.get('/despesas', controller.getAllDespesas);
router.get('/despesas/:id', controller.getDespesasByID);
router.post('/despesas', controller.addDespesa);
router.delete('/despesas/:id', controller.deleteDespesa);
module.exports = router;