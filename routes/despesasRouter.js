var express = require('express');
var router = express.Router();

let controller = require('../controllers/despesasController')
const middleware = require('../middlewares/auth')
/* GET users listing. */
router.get('/despesas', controller.getAllDespesas);
router.get('/despesas/:id', controller.getDespesasByID);
router.post('/despesas',middleware.verificaToken, controller.addDespesa);
router.delete('/despesas/:id', controller.deleteDespesa);
router.put('/despesas/:id', controller.editeDespesa);

module.exports = router;