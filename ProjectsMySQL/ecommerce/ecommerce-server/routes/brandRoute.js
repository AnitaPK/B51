const express = require("express");
const brandController = require("../controllers/brandController");

const router = express.Router();

router.get("/getAllBrands", brandController.getAllBrands);
router.get("/getBrandById/:ID", brandController.getBrandById);
router.post("/createBrand", brandController.createBrand )
router.put("/updateBrand/:ID",brandController.updateBrand)
router.delete("/deleteBrand/:ID", brandController.deleteBrand)

module.exports = router;
