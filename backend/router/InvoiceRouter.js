var express = require('express');
var router = express.Router();
var controller=require('../controller/InvoiceController');
module.exports=router;

router.get('/get-invoice', controller.getInvoice);