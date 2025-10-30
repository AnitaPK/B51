const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoute')
const projectRouter = require('./routes/projectRoute')
const taskRouter = require('./routes/taskRoute')
const path = require('path')

const app = express()
const port = 5000


app.use(express.json())
app.use(cors())

connectDB();
// app.get('/', (req, res) => res.send('Hello World!'))


app.use('/user',userRouter )
app.use('/download', express.static(path.join('uploads')) )
app.use('/projects' , projectRouter)
app.use('/tasks',taskRouter )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))