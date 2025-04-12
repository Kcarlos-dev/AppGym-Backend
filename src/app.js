require('dotenv').config({ path: '../.env' })

const db = require('./config/db')
const tbUser = require('./migrations/users')
const tbExercicios = require('./migrations/exercicios')
const SeedAdm = require('./seed/adm')
const authRoutes = require('./routes/AuthRoutes')
const userRoutes = require('./routes/UserRoutes')
const admRoutes  = require('./routes/AdmRoutes')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/login',authRoutes)
app.use('/user',userRoutes)
app.use('/adm',admRoutes)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})