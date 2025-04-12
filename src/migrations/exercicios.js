const db = require('../config/db')

const CreateTb = () =>{
    const sql = `
    CREATE TABLE IF NOT EXISTS EXERCICIOS(
    ID              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TIPO            VARCHAR(100),
    EXERCICIO       VARCHAR(100) UNIQUE,
    FOTO            VARCHAR(50) NULL,
    MUSCULOS        JSON 
    )
    `
    db.query(sql,(error,result)=>{
        if(error){
            console.log("Erro ao criar a tabela Exercicios: "+error)
            return
        }
        console.log('Tabela EXERCICIOS iniciada')
    })
}

module.exports = CreateTb()