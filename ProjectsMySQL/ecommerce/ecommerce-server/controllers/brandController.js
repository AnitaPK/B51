const Brand = require('../models/brandModel')


const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.findAll()
        res.status(200).send({brands:brands,success:true}) 
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
};

function getBrandById(req, res) {
  const ID = req.params.ID;
   try {
     console.log(ID)   
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}

async function createBrand(req, res) {
    console.log(req.body)
     try {
        const newBrand = await Brand.create(req.body)
        if(newBrand){
        res.status(200).send({msg:"Brand created successfully",success:true})
        }else{
        res.status(400).send({msg:"Error while creating Brand",success:false})
        }
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
function updateBrand(req, res) {
  const ID = req.params.ID;
   try {
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
function deleteBrand(req, res) {
  const ID = req.params.ID;
   try {
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
};
