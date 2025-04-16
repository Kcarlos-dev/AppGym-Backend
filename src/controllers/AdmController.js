const exerciciosModel = require('../models/exercicios')
const userModel = require('../models/users')

const BuscarExercicios = (req, res)=>{
    const user = req.params.user

    if(user != "adm"){
        return res.json("Sem autorização")
    }
    exerciciosModel.SelectExercicios()
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))

}
const AlterarTreino = (req,res)=>{
    const {user,email,treino} = req.body

    if(user != "adm"){
        return res.json("Sem autorização")
    }

    if(
        email.trim().length           <= 0 || 
        treino.length                 <= 0 
    ){
        return res.json("Falta de campos prenchidos")
    }

    userModel.UpdateTreino(treino,email)
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))
}
const CadastrarExercicios = (req,res) =>{
    const {user,tipo,exercicio, musculos} = req.body

    if(user != "adm"){
        return res.json("Sem autorização")
    }

    if(
        tipo.trim().length           <= 0 || 
        exercicio.trim().length      <= 0 ||
        musculos.length              <= 0 
    ){
        return res.json("Falta de campos prenchidos")
    }

    exerciciosModel.InsertExercicios(tipo,exercicio, musculos)
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))
}

module.exports = {
    BuscarExercicios,
    CadastrarExercicios,
    AlterarTreino
}