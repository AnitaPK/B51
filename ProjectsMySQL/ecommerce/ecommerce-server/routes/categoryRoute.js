const express = require("express");
const categoryController = require("../controllers/categoryController");
const {protect,adminOnly } = require('../middleware/auth')
const {uploadSingle, uploadMultiple} = require('../middleware/multer')

const router = express.Router();

router.get("/getAllCategories", categoryController.getAllCategories);
router.get("/getCategoryById/:ID", categoryController.getCategoryById);
router.post("/createCategory",protect,adminOnly, uploadSingle("myfile"),categoryController.createCategory )
router.put("/updateCategory/:ID",protect,adminOnly,uploadSingle("myfile"),categoryController.updateCategory)
router.delete("/deleteCategory/:ID",protect,adminOnly, categoryController.deleteCategory)

module.exports = router;
