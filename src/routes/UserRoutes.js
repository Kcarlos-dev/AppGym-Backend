const express = require('express');
const {CriarUsuario,AtualizarUsuario, BuscarTreino} = require('../controllers/UserController')

const router = express.Router()

router.get("/training",BuscarTreino)
router.post("/create",CriarUsuario)
router.put("/alter/:id",AtualizarUsuario)

module.exports = router