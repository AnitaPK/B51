const Category = require('../models/categoryModel')


const getAllCategories = async (req, res) => {
    try {
        console.log("******")
        const categories = await Category.findAll()
        res.status(200).send({categories:categories,success:true}) 
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
};

async function getCategoryById(req, res) {
  const ID = req.params.ID;
   try {
     console.log(ID)   
     const category = await Category.findByPk(ID);
    if (!category){
        res.status(404).send({ message: "Category not found" });
    }else{
    res.status(200).send({ success: true, category });  
    }
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}

async function createCategory(req, res) {
    console.log(req.body)
     try {
        const newCategory = await Category.create(req.body)
        console.log(newCategory)
        if(newCategory){
        res.status(200).send({msg:"Category created successfully",success:true})
        }else{
        res.status(400).send({msg:"Error while creating Category",success:false})
        }
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
async function updateCategory(req, res) {
  const ID = req.params.ID;
   try {
        const { cName } = req.body;
    const category = await Category.findByPk(req.params.ID);
    if (!category) return res.status(404).send({ message: "Category not found" });

    category.cName = cName || category.cName;
    await category.save();

    res.status(200).send({ success: true, category });
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
async function deleteCategory(req, res) {
    console.log(req.params)
  const {ID} = req.params;
   try {
    const category = await Category.findOne({ where: { id: ID } });
    if (!category) return res.status(404).send({ message: "Category not found" });

    await category.destroy();
    res.status(200).send({ success: true, message: "Category deleted successfully" });
        
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
