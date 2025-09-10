const products = require('../data/products')
const categories = require('../data/categories')

const getAllProducts = (req,res)=>{
    res.status(200).send({products:products})    
}

function getProductById(req,res){
}
function createProduct(req,res){
    cat = categories.find((c)=> c.id ==  req.body.categoryID)
    console.log(cat)
    if(!cat){
        res.status(400).send({msg:"Category not found"})
    }else{
    const newProduct = {
        id : Date.now(),
        name:req.body.name,
        description : req.body.description,
        price:req.body.price,
        stock:req.body.quantity,
        categoryID: cat.id
    }
    products.push(newProduct)
    res.status(200).send({msg:"Product created successfully"})

}
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}