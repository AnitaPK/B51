const categories = require('../data/categories')

const getAllCategories = (req,res)=>{
    res.status(200).send({categories:categories})
}

function getCategoryById(req,res){

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

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
}