const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
            cb(null, "uploads/")
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req,file, cb) =>{
    const allowedTypes = /jpeg|jpg|png/
    const extname = allowedTypes.test(path.extname(file.originalname))
    if(extname) return cb(null, true)
        cb(new Error("Only images (png, jpg, jpeg) allowed"))
}

const upload = multer({storage, fileFilter})

const uploadSingle = (fileName)=> upload.single(fileName)

const uploadMultiple = (fieldName, maxCount = 3) => upload.array(fieldName,maxCount)

module.exports = {
    uploadSingle, uploadMultiple
}