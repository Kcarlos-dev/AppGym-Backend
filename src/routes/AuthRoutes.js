const express = require('express');
const {login} = require('../controllers/AuthController');
const verifyToken = require('../middleware/AuthMiddleware');

const router = express.Router()

router.post('/auth',login)

router.get('/user',verifyToken,(req, res) => {
    res.json({ message: 'Acesso autorizado!', user: req.user });
})

module.exports = router