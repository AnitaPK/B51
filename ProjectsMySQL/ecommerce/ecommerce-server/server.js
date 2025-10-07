 const express = require('express')
 const cors = require('cors')
const categoryRoute = require('./routes/categoryRoute')
const brandRoute = require('./routes/brandRoute')
const productRoute = require('./routes/productRoute')
const path = require('path')

const app = express()
const port = 7000

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/category', categoryRoute)
app.use('/brand', brandRoute)
app.use('/product',productRoute)
app.use('/download', express.static(path.join('uploads')) )


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// http://localhost:7000/category/getAllCategories
// http://localhost:7000/brand/getAllBrands
// http://localhost:7000/product/getAllProducts
//http://localhost:7000/download/