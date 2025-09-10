const express = require('express')



const app = express()


app.use(express.json())
// CORS 

app.use(express.static('public'))


// app.get('/', (req,res)=>{
//     res.send('Hello world....')
// })

// app.get('/about', (req,res)=>{
//     res.send("<h1>This is about us page</h1>")
// })

// create route for contact us 



app.listen(5000, ()=> console.log('server started'))


// http://localhost:5000/
// http://localhost:5000/about