const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.get('/getAllProducts', productController.getAllProducts)
router.get('/getProductById/:ID', productController.getProductById)
router.post('/createProduct', productController.createProduct )
router.put("/updateProduct/:ID",categoryController.updateProduct)
router.delete("/deleteProduct/:ID", categoryController.deleteProduct)

module.exports = router
