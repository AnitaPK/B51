const express = require('express')
const productController = require('../controllers/productController')
const {uploadSingle, uploadMultiple} = require('../middleware/multer')
const {protect,adminOnly } = require('../middleware/auth')

const router = express.Router()

router.get('/getAllProducts', productController.getAllProducts)
router.get('/getProductById/:ID', productController.getProductById)
router.post('/createProduct',protect,adminOnly, uploadMultiple("myfiles"),productController.createProduct )
router.put("/updateProduct/:ID",protect,adminOnly,productController.updateProduct)
router.delete("/deleteProduct/:ID",protect,adminOnly, productController.deleteProduct)

router.get('/filter', productController.getProductByFilter)


module.exports = router
