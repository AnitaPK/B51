const Product = require("../models/productModel");
const { Op } = require("sequelize");
const Category = require('../models/categoryModel');
const Brand = require('../models/brandModel');

const baseURL = 'http://localhost:7000/download/'; // for serving images

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category, attributes: ['cName'] },
        { model: Brand, attributes: ['bName'] }
      ]
    });

    // Map products to include names
    const updatedProducts = products.map(p => {
      const plain = p.get({ plain: true });
      return {
        ...plain,
        brandName: plain.Brand?.bName || "",
        categoryName: plain.Category?.cName || "",
        images: plain.images ? plain.images.map(img => `${baseURL}${img}`) : []
      };
    });

    res.status(200).send({ products: updatedProducts, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const ID = req.params.ID;
  try {
    // Include Category and Brand models to get names
    const product = await Product.findByPk(ID, {
      include: [
        { model: Category, attributes: ['cName'] },
        { model: Brand, attributes: ['bName'] }
      ]
    });

    if (!product) return res.status(404).send({ message: "Product not found" });

    // Map product to include names and full image URLs
    const updatedProduct = {
      ...product.get({ plain: true }),
      brandName: product.Brand?.bName || "",
      categoryName: product.Category?.cName || "",
      images: product.images ? product.images.map((img) => `${baseURL}${img}`) : [],
    };

    res.status(200).send({ success: true, product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};

// Create product
const createProduct = async (req, res) => {
  try {
    const { pName, pDescription, price, quantity, catID, brandID } = req.body;

    // Save multiple image filenames as array
    const images = req.files ? req.files.map(file => file.filename) : [];

    const newProduct = await Product.create({
      pName,
      pDescription,
      price,
      quantity,
      catID,
      brandID,
      images
    });

    res.status(200).send({ msg: "Product created successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};
// Update product
const updateProduct = async (req, res) => {
  try {
    const { pName, pDescription, price, quantity, catID, brandID } = req.body;
    const product = await Product.findByPk(req.params.ID);

    if (!product) return res.status(404).send({ msg: "Product not found" });

    // If new files uploaded, append to existing images
    const newImages = req.files ? req.files.map(file => file.filename) : [];
    const allImages = product.images ? [...product.images, ...newImages] : newImages;

    await product.update({
      pName: pName || product.pName,
      pDescription: pDescription || product.pDescription,
      price: price || product.price,
      quantity: quantity || product.quantity,
      catID: catID || product.catID,
      brandID: brandID || product.brandID,
      images: allImages
    });

    res.status(200).send({ msg: "Product updated successfully", success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const ID = req.params.ID;
  try {
    const product = await Product.findByPk(ID);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.destroy();
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};

// Filter products
const getProductByFilter = async (req, res) => {
  const { minPrice, maxPrice, brandID, catID } = req.query;
  const whereClause = {};

  if (minPrice && maxPrice) whereClause.price = { [Op.between]: [Number(minPrice), Number(maxPrice)] };
  if (brandID) whereClause.brandID = brandID;
  if (catID) whereClause.catID = catID;

  try {
    const products = await Product.findAll({
      where: whereClause,
      include: ["Category", "Brand"],
    });

    const updatedProducts = products.map((p) => ({
      ...p.get({ plain: true }),
      images: p.images ? p.images.map((img) => `${baseURL}${img}`) : [],
    }));

    res.status(200).send({ success: true, products: updatedProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByFilter,
};
