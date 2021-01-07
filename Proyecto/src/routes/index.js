const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* Home */
router.get('/',mainController.home);
// router.get('/carrito',mainController.carrito)


module.exports = router;
