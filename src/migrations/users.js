const db = require('../config/db')

const CreateTb = ()=>{
    
    const sql = `
    CREATE TABLE IF NOT EXISTS  USERS(
    ID_USER INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(100),
    EMAIL VARCHAR(100) UNIQUE,
    CPF VARCHAR(20) UNIQUE,
    DATA_NASC DATE,
    SENHA VARCHAR(255),
    TIPO_USER VARCHAR(50) NULL,
    TREINO JSON
    )
    `
    
    db.query(sql, (error, results)=>{
        if(error){
            console.log("Erro ao criar a tabela USERS: "+error)
            return
        }
        console.log('Tabela USERS iniciada')
    })

}

module.exports = CreateTb()
