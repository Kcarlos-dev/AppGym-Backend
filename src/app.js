require('dotenv').config({ path: '../.env' })

const db = require('./config/db')
const tbUser = require('./migrations/users')
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})