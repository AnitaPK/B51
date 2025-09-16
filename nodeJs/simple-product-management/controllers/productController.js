const products = require('../data/products')
const categories = require('../data/categories')

const getAllProducts = (req,res)=>{
    res.status(200).send({products:products})    
}

function getProductById(req,res){
    const ID = req.params.ID;

    const product = products.find(p => p.id == ID);

    if(!product) {
        res.status(400).send({msg:"product not found", status:false})
    }else {
        res.status(200).send({product:product, status:true})
    }
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
function updateProduct(req,res){
        console.log(req.params.ID);
  const ID = req.params.ID;
  const index = products.findIndex((b) => b.id == ID);

  if (index == -1) {
    res.status(400).send({ msg: "product not found", success: false });
  } else {
    products[index].price = req.body.price || products[index].price;
    res.status(200).send({ msg: "product updated successfully" });
  }
}
    const deleteProduct = (req, res) => {
    const ID = req.params.id;
    const index = products.findIndex((p) => p.id == ID);

    if (index == -1) {
        return res.status(400).send({ msg: "Product not Found", success: false });
    }

    const deletedProduct = products.splice(index, 1);
    res.status(200).send({ msg: "Product deleted successfully",  success: true });
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}