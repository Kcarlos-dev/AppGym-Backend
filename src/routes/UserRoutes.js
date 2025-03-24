const express = require('express');
const {CriarUsuario} = require('../controllers/UserController')

const router = express.Router()

router.post("/create",CriarUsuario)

module.exports = router