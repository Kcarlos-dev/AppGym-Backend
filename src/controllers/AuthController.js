const jwt = require('jsonwebtoken');
const { SearchUser } = require('../models/users');

const SECRET_KEY = process.env.JWT_SECRET;

const login = (req, res) =>{

    const token =  jwt.sign(SearchUser(req.email, req.senha),SECRET_KEY, {expiresIn: '1h'})

    return res.json({token})
}

module.exports = { login };
