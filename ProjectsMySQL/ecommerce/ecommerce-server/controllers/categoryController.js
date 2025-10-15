const Category = require('../models/categoryModel');
const baseURL = 'http://localhost:7000/download/';

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    const updatedCategories = categories.map((c) => ({
      id: c.id,
      cName: c.cName,
      cImage: c.cImage ? `${baseURL}${c.cImage}` : ''
    }));
    res.status(200).send({ categories: updatedCategories, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};

// Get category by ID
async function getCategoryById(req, res) {
  const ID = req.params.ID;
  try {
    const category = await Category.findByPk(ID);
    if (!category) {
      return res.status(404).send({ success: false, msg: "Category not found" });
    }
    const plainCategory = category.get({ plain: true });
    const updatedCategory = {
      id: plainCategory.id,
      cName: plainCategory.cName,
      cImage: plainCategory.cImage ? `${baseURL}${plainCategory.cImage}` : ''
    };
    res.status(200).send({ success: true, category: updatedCategory });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
}

// Create category
async function createCategory(req, res) {
    console.log(req.body)
  try {
    const cName = req.body.cName;
    const cImage = req.file ? req.file.filename : null; // optional for future image support

    const newCategory = await Category.create({ cName, cImage });
    if (newCategory) {
      res.status(200).send({ msg: "Category created successfully", success: true });
    } else {
      res.status(400).send({ msg: "Error while creating category", success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
}

// Update category
async function updateCategory(req, res) {
  const ID = req.params.ID;
  try {
    const { cName } = req.body;
    const category = await Category.findByPk(ID);
    if (!category) return res.status(404).send({ success: false, msg: "Category not found" });

    category.cName = cName || category.cName;
    await category.save();

    res.status(200).send({ success: true, category });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
}

// Delete category
async function deleteCategory(req, res) {
  const { ID } = req.params;
  try {
    const category = await Category.findOne({ where: { id: ID } });
    if (!category) return res.status(404).send({ success: false, msg: "Category not found" });

    await category.destroy();
    res.status(200).send({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
