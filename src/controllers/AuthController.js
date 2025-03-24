require('dotenv').config({ path: '../.env' })
const jwt = require('jsonwebtoken')
const { SearchUser } = require('../models/users')

const SECRET_KEY = process.env.JWT_SECRET
const login = (req, res) =>{
    const {email,senha} = req.body
    SearchUser(email, senha)
    .then((results)=>{
        const token =  jwt.sign(results,SECRET_KEY, {expiresIn: '1h'})
        return res.json({token})
    })
    .catch((err)=>{
        res.json((error) => res.status(500).json({ status: 500, message: error }))
        
    })

}

module.exports = { login };
