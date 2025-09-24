const express = require("express");
const brandController = require("../controllers/brandController");

const router = express.Router();

router.get("/getAllBrands", categoryController.getAllBrands);
router.get("/getBrandById/:ID", categoryController.getBrandById);
router.post("/createBrand", categoryController.createBrand )
router.put("/updateBrand/:ID",categoryController.updateBrand)
router.delete("/deleteBrand/:ID", categoryController.deleteBrand)

module.exports = router;
