require('dotenv').config({ path: '../.env' })

const db = require('./config/db')
const tbUser = require('./migrations/users')
const authRoutes = require('./routes/AuthRoutes')
const userController = require('./routes/UserRoutes')
const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/login',authRoutes)
app.use('/user',userController)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})