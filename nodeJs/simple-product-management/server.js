const express = require('express')
require('dotenv').config()
const productRouter = require('./routes/productRoute')
const categoryRouter = require('./routes/categoryRouter')
const { getProductById } = require('./controllers/productController')

const app = express()
const port = process.env.PORT    || 3000


app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'))



app.use('/api/product', productRouter)
app.use('/api/category', categoryRouter)


// getCategoryById 
// getProductById 
// updateCategory 
// updateProduct
// deleteCategory
// deleteProduct






app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// http://localhost:7000/api/product/getAllProducts
// http://localhost:7000/api/product/getProductById/23456