const express = require("express");
const brandController = require("../controllers/brandController");
const {uploadSingle, uploadMultiple} = require('../middleware/multer')
const {protect,adminOnly } = require('../middleware/auth')

const router = express.Router();

router.get("/getAllBrands", brandController.getAllBrands);
router.get("/getBrandById/:ID", brandController.getBrandById);
router.post("/createBrand",protect,adminOnly, uploadSingle("myfile"), brandController.createBrand )
router.put("/updateBrand/:ID",protect,adminOnly,uploadSingle("myfile"), brandController.updateBrand)
router.delete("/deleteBrand/:ID",protect,adminOnly, brandController.deleteBrand)

module.exports = router;
