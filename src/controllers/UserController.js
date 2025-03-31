const userModel = require('../models/users')

const BuscarTreino = (req,res)=>{
    const {id,email} = req.query

    if(        
        id.trim().length    <= 0
     || email.trim().length <= 0 

    ){
        res.json("Falta preencher algo campo") 
    }
    userModel.TrainingUser(id,email)
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))

    
}

const CriarUsuario = (req,res)=>{
    const {name,email,cpf,data_nasc,senha,treino} = req.body
    if(    name.trim().length <= 0
        || email.trim().length <= 0 
        || cpf.trim().length <= 0
        || data_nasc.trim().length <= 0
        || senha.trim().length <= 0
        || treino.trim().length <= 0
    ){
        res.json("Falta preencher algo campo") 
    }
    
    userModel.InsertUser(name, email, cpf, data_nasc, senha, treino)
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))
     
}

const AtualizarUsuario = (req,res)=>{
    const {alter,nome,senha,nv_senha} = req.body
    const id = req.params.id
    if(        id.trim().length <= 0
            || alter.trim().length <= 0 
            || nome.trim().length <= 0
            || senha.trim().length <= 0
            || nv_senha.trim().length <= 0
        ){
            res.json("Falta preencher algo campo") 
        }
        userModel.UpdateUser(alter,id,nome,senha,nv_senha)
        .then((message) => res.json({ status: 200, message }))
        .catch((error) => res.status(500).json({ status: 500, message: error }))
}

module.exports ={
    CriarUsuario,
    AtualizarUsuario,
    BuscarTreino
}