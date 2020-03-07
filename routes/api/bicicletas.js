var express =require('express');
var router=express.Router();

var bicicletaController=require('../../controllers/api/bicicletaControllerAPI');

router.get('/',bicicletaController.bicicleta_list);
router.post('/create',bicicletaController.bicicleta_create);
router.post('/delete',bicicletaController.bicicleta_delete);
router.post('/update',bicicletaController.bicicleta_update);
module.exports=router;