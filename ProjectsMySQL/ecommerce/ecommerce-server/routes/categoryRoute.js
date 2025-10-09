const express = require("express");
const categoryController = require("../controllers/categoryController");
const {protect,adminOnly } = require('../middleware/auth')

const router = express.Router();

router.get("/getAllCategories", categoryController.getAllCategories);
router.get("/getCategoryById/:ID", categoryController.getCategoryById);
router.post("/createCategory",protect,adminOnly, categoryController.createCategory )
router.put("/updateCategory/:ID",protect,adminOnly,categoryController.updateCategory)
router.delete("/deleteCategory/:ID",protect,adminOnly, categoryController.deleteCategory)

module.exports = router;
