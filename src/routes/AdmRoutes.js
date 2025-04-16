const express = require('express')

const { BuscarExercicios, CadastrarExercicios,AlterarTreino } = require('../controllers/AdmController')
const upload = require("../middleware/MulterMiddleware")


const router = express.Router()



router.get("/exercicios/:user", BuscarExercicios)
router.post("/maquinas",CadastrarExercicios)
router.put("/alter/treino",AlterarTreino)
router.post("/maquinas/img", upload.single('img'), (req, res) => {
  res.json("200 => IMAGEM recebida com sucesso")
})

module.exports = router