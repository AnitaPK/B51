const express = require("express");
const brandController = require("../controllers/brandController");
const {uploadSingle, uploadMultiple} = require('../middleware/multer')

const router = express.Router();

router.get("/getAllBrands", brandController.getAllBrands);
router.get("/getBrandById/:ID", brandController.getBrandById);
router.post("/createBrand",uploadSingle("myfile"), brandController.createBrand )
router.put("/updateBrand/:ID",uploadSingle("myfile"), brandController.updateBrand)
router.delete("/deleteBrand/:ID", brandController.deleteBrand)

module.exports = router;
