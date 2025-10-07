const express = require('express')
const productController = require('../controllers/productController')
const {uploadSingle, uploadMultiple} = require('../middleware/multer')


const router = express.Router()

router.get('/getAllProducts', productController.getAllProducts)
router.get('/getProductById/:ID', productController.getProductById)
router.post('/createProduct', uploadMultiple("myfiles"),productController.createProduct )
router.put("/updateProduct/:ID",productController.updateProduct)
router.delete("/deleteProduct/:ID", productController.deleteProduct)

router.get('/filter', productController.getProductByFilter)


module.exports = router
