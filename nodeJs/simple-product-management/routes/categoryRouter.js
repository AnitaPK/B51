const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/getAllCategories", categoryController.getAllCategories);
router.get("/getCategoryById/:ID", categoryController.getCategoryById);
router.post("/createCatgory", categoryController.createCategory )

module.exports = router;
