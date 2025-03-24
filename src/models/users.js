const db = require("../config/db")
const passwordHash = require('password-hash')

const SearchUser = (u_email,u_senha)=>{

    const sql = `
    SELECT EMAIL, NOME
    FROM
    USERS
    WHERE
    EMAIL = ?
    `
    db.query(sql,[u_email],(error, results)=>{
        if(error){
            console.log("Usuario não existe")
            return
        }
        if(passwordHash.verify(u_senha,results[0].SENHA)){
            console.log("Usuario encontrado")
            const userPayload = {
                email: results[0].EMAIL,
                name: results[0].NOME
            };      
            return userPayload
        }else{
            console.log("Usuario não existe")
            return
        }
    })
}

const InsertUser = (u_name,u_email,u_cpf,u_data_nasc,u_senha,u_treino) => {
    let password = passwordHash.generate(u_senha)
    const sql = `
        INSERT INTO USERS(
            NOME,
            EMAIL,
            CPF,
            DATA_NASC,
            SENHA,
            TREINO
        )
        VALUES(
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )
    `
    db.query(sql,[u_name, u_email, u_cpf, u_data_nasc, password, u_treino], (error, results)=>{
        if(error){
            console.log("Erro ao inserir usuario: "+error)
            return
        }
        console.log('usuario cadastrado')
    })
}

const UpdateUser = (alter,u_id,u_nome,u_senha) => {
    let sql = ""
    if(alter === "nome"){
        sql = `
            UPDATE USERS
            SET
            NOME = ?
            WHERE
            ID_USER = ?        
        `
        db.query(sql,[u_id,u_nome],(error)=>{
            if(error){
                console.log("Erro ao alterar nome: "+error)
                return
            }
            console.log("Nome alterado com sucesso")
        })
    }
    if(alter === "password"){
        sql = `
            UPDATE USERS
            SET
            SENHA = ?
            WHERE
            ID_USER = ?
        `
        db.query(sql,[u_id,u_senha],(error)=>{
            if(error){
                console.log("Erro ao alterar senha: "+error)
                return
            }
            console.log("Senha alterada com sucesso")
        })
    }

}

const DeleteUser = (u_id)=>{
    const sql = `
        DELETE 
        FROM 
        USERS 
        WHERE 
        ID_USER = ?
    `
    db.query(sql,[u_id],(error)=>{
        if(error){
            console.log("ERRO ao deltar usuario")
            return
        }
        console.log("Usuario deletado com sucesso")
    })

}

module.exports = {
    SearchUser,
    InsertUser,
    UpdateUser,
    DeleteUser
}