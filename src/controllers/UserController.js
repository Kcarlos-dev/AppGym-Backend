const userModel = require('../models/users')

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

module.exports ={
    CriarUsuario
}