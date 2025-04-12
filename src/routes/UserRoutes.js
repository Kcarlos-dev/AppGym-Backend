const express = require('express');
const {CriarUsuario,AtualizarUsuario, BuscarTreino, AtualizarAdm} = require('../controllers/UserController')

const router = express.Router()

router.get("/training",BuscarTreino)
router.post("/create",CriarUsuario)
router.put("/alter/:id",AtualizarUsuario)
router.put("/adm/:id",AtualizarAdm)

module.exports = router