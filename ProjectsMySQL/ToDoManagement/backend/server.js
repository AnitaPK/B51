const express = require('express')
require('dotenv').config()
const taskRoute = require('./routes/taskRoute')

const app = express()
const port = process.env.PORT || 7000
const dbConnect = require('./config/db')

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/task', taskRoute)


app.listen(port, () => console.log(`server listening on port ${port}!`))


// http://localhost:7001/task/getAllTasks