const categories = require('../data/categories')

const getAllCategories = (req,res)=>{
    res.status(200).send({categories:categories})
}

function getCategoryById(req,res){
         const ID = req.params.ID;

    const category = categories.find(c => c.id == ID);

    if(!category) {
        res.status(400).send({msg: "category not found", status:false})
    }else{
        res.status(200).send({category:category, status:true})
    }
}

function createCategory(req,res){
    console.log(req.body)
    newCat = {
        id:categories.length + 1,
        name:req.body.name,
    }
    categories.push(newCat)
    res.status(200).send({msg:"Category created successfully"})
}
function updateCategory(req,res)
{ const ID = req.params.ID;

    const category = categories.find(c => c.id == ID);

    if(!category) {
        res.status(400).send({msg:"Category not found", status:false})
    }else{
        category.name = req.body.name || category.name;
        res.status(200).send({ msg: "Category updated successfully", category, status: true });
    }
}
function deleteCategory(req,res){
   console.log(req.params.ID);
  const ID = parseInt(req.params.ID);

  const index = categories.findIndex((c) => c.id == ID);
  if (index === -1) {
    return res.status(400).send({ msg: "Category not found", success: false });
  }

  const hasProducts = products.some((p) => p.categoryID == ID);
  if (hasProducts) {
    return res.status(400).send({
      msg: "Category contains products, cannot delete",
      success: false,
    });
}
categories.splice(index, 1);
  res.status(200).send({ msg: "Category deleted successfully", success: true });
}
module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}