const express = require('express');
const {login} = require('../controllers/AuthController')

const router = express.Router()

router.get('/oi',(req,res)=>{
    res.send("hola")
})
router.post('/auth',login)

module.exports = router