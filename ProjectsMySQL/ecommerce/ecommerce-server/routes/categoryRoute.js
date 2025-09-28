const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/getAllCategories", categoryController.getAllCategories);
router.get("/getCategoryById/:ID", categoryController.getCategoryById);
router.post("/createCategory", categoryController.createCategory )
router.put("/updateCategory/:ID",categoryController.updateCategory)
router.delete("/deleteCategory/:ID", categoryController.deleteCategory)

module.exports = router;
