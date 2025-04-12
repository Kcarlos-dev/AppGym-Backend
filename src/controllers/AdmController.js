const exerciciosModel = require('../models/exercicios')

const BuscarExercicios = (req, res)=>{
    const user = req.params.user

    if(user != "adm"){
        return res.json("Sem autorização")
    }
    exerciciosModel.SelectExercicios()
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))

}

module.exports = {
    BuscarExercicios
}