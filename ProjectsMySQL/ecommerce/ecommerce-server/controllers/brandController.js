const Brand = require('../models/brandModel')

const baseURL = 'http://localhost:7000/download/'
const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.findAll()
        const updatedBrands = brands.map((b)=>(
        {id:b.id,
         bName:b.bName,
         bIamge: b.bImage ? `${baseURL}${b.bImage}` : ''
}))
console.log(updatedBrands)
        res.status(200).send({brands:updatedBrands,success:true}) 
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
};

async function getBrandById(req, res) {
  const ID = req.params.ID;
   try {
     console.log(ID) 
     const brand = await Brand.findByPk(ID);
     const updatedBrand = {id:brand.id,
         bName:brand.bName,
         bIamge: brand.bImage ? `${baseURL}${b.bImage}` : ''
}
    if (!brand){
        res.status(404).send({ message: "Brand not found" });
    }else{
    res.status(200).send({ success: true, updatedBrand });  
    }
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}

async function createBrand(req, res) {

    console.log(req.body)
    bName = req.body.bName;
    bImage = req.file ? req.file.filename : null
     try {
        const newBrand = await Brand.create({bName:bName,bImage:bImage})
        if(newBrand){
        res.status(200).send({msg:"Brand created successfully",success:true})
        }else{
        res.status(400).send({msg:"Error while creating Brand",success:false})
        }
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
async function updateBrand(req, res) {
  const ID = req.params.ID;
   try {
    const { bName } = req.body;
    const brand = await Brand.findByPk(req.params.ID);
    if (!brand) return res.status(404).send({ message: "Brand not found" });

    brand.bName = bName || brand.bName;
    await brand.save();

    res.status(200).send({ success: true, brand });
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }

}
async function deleteBrand(req, res) {
  const {ID} = req.params;
    console.log(ID, req.params.ID)

   try {
    const brand = await Brand.findOne({ where: { id: ID } });
    console.log(brand)
    if (!brand) return res.status(404).send({ message: "Brand not found" });

    await brand.destroy();
    res.status(200).send({ success: true, message: "Brand deleted successfully" });
        
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
