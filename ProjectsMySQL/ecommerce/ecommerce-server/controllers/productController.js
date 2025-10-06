const Product = require("../models/productModel");
const { Op } = require("sequelize");

const getAllProducts = async (req, res) => {
  try {
    const prods = await Product.findAll();
    res.status(200).send({ products: prods, success: true });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

const getProductById = async (req, res) => {
  console.log(req.params.ID);
  try {
    const product = await Product.findByPk(ID);
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.status(200).send({ success: true, product });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log(newProduct);
    if (newProduct) {
      res
        .status(200)
        .send({ msg: "Product created successfully", success: true });
    } else {
      res
        .status(400)
        .send({ msg: "Error while creating Product", success: false });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  console.log(req.params.ID);

  try {
    const { pName, pDescription, price, quantity, catID, brandID } = req.body;
    const product = await Product.findByPk(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    product.pName = pName || product.pName;
    product.pDescription = pDescription || product.pDescription;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;
    product.catID = catID || product.catID;
    product.brandID = brandID || product.brandID;

    await product.save();
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

const deleteProduct = async (req, res) => {
  console.log(req.params.ID);

  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.destroy();
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

async function getProductByFilter(req, res) {
  console.log(req.query);
  const {minPrice,maxPrice,color } = req.query

  const whereClause ={}

   if (minPrice && maxPrice) {
      whereClause.price = { [Op.between]: [Number(minPrice), Number(maxPrice)] };
    } 

  try {
        // Fetch products with filters
    const products = await Product.findAll({
      where: whereClause,
      include: ["Category", "Brand"] 
    });
    console.log(products)
    if(!products){
    res.status(201).send({ success: true,msg:"Product not found" });

    }
    res.status(200).send({ success: true,products:products });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

// http://localhost:7000/product/filter?minPrice=5678&maxPrice=76543

// select * from products where price = minPrice between maxPrice 

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByFilter,
};
