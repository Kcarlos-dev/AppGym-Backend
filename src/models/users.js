require('dotenv').config({ path: '../.env' })
const db = require("../config/db")
const passwordHash = require('password-hash')

const TrainingUser = (id,u_email)=>{
    return new Promise((resolve,reject)=>{
        const sql =`
        SELECT TREINO
        FROM
        USERS
        WHERE
        1=1
        AND ID_USER = ?
        AND EMAIL = ?
        `
        db.query(sql,[id,u_email],(error, results)=>{
            if(error){
                reject("Erro ao buscar treino: "+error)
            }
            resolve(results[0])
        })
    })
}

const SearchUser = (u_email,u_senha)=>{
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT 
        *
        FROM
        USERS
        WHERE
        EMAIL = ?
        `
        db.query(sql,[u_email],(error, results)=>{
            if(error){
               reject("Erro ao procurar no banco: "+error)
            }
            if (results.length === 0) {
                return reject("Usuário não encontrado")
            }
            if(passwordHash.verify(u_senha,results[0].SENHA)){
                console.log("Usuario encontrado")
                const userPayload = {
                    id:results[0].ID_USER,
                    email: results[0].EMAIL,
                    treino: results[0].TREINO,
                    name: results[0].NOME,
                    tipo:results[0].TIPO_USER,
                    exists:true
                }     
                resolve(userPayload)
                 
            }else{
                reject("Usuario não existe")
            }
        })
    })
}

const InsertUser = (u_name,u_email,u_cpf,u_data_nasc,u_senha,u_treino) => {
    return new Promise((resolve, reject) => {
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
                reject("Erro ao inserir usuario: "+error) 
            }
                resolve('usuario cadastrado')
        })

    })
}

const UpdateTreino = (treino,email)=>{
    return new Promise((resolve,reject)=>{
        sql = `
        UPDATE USER
        SET
        TREINO = ?
        WHERE
        EMAIL  = ?
        `
        db.query(sql,[`"${treino}"`,email],(error)=>{
            if (error) {
                reject("Erro ao alterar treino: " + error)
            }
            resolve("Treino alterado com sucesso")
        })
    })
} 

const UpdateAdm = (u_nome,u_email,u_cpf,u_data_nasc,u_senha,u_id)=>{
    return new Promise((resolve,reject)=>{
        let password = passwordHash.generate(u_senha)
            sql = `
            UPDATE USERS
            SET
            NOME        = ?,
            EMAIL       = ?,
            CPF         = ?,
            DATA_NASC   = ?,
            SENHA       = ?
            WHERE
            ID_USER     = ?        
        `
            db.query(sql, [u_nome,u_email,u_cpf,u_data_nasc,password,u_id ], (error) => {
                if (error) {
                    reject("Erro ao alterar user: " + error)
                }
                resolve("User alterado com sucesso")
            })
        
    })
    }


const UpdateUser = (alter,u_id,u_nome,u_senha,u_senha_new) => {
    return new Promise((resolve, reject) => {
        const sqlSenha = `
        SELECT 
        SENHA
        FROM
        USERS
        WHERE
        ID_USER = ?
        `
        db.query(sqlSenha,[u_id],(error, results)=>{
            if(error){
               reject("Erro ao achar usuario: "+error)
            }
            if(passwordHash.verify(u_senha,results[0].SENHA)){
                let password = passwordHash.generate(u_senha_new)
                let sql = ""
                if(alter === "nome"){
                    sql = `
                        UPDATE USERS
                        SET
                        NOME = ?
                        WHERE
                        ID_USER = ?        
                    `
                    db.query(sql,[u_nome,u_id],(error)=>{
                        if(error){
                            reject("Erro ao alterar nome: "+error)
                        }
                        resolve("Nome alterado com sucesso")
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
                    db.query(sql,[password,u_id],(error)=>{
                        if(error){
                            reject("Erro ao alterar senha: "+error)      
                        }
                        resolve("Senha alterada com sucesso")
                    })
                }
                     
            }else{
                reject("Senha atual errada: ")
            }
        })
    


    })

}

const DeleteUser = (u_id)=>{
    return new Promise((resolve, reject) => {
        const sql = `
            DELETE 
            FROM 
            USERS 
            WHERE 
            ID_USER = ?
        `
        db.query(sql,[u_id],(error)=>{
            if(error){
                reject("ERRO ao deltar usuario: "+error)
            }
            resolve("Usuario deletado com sucesso")
        })
    })

}

module.exports = {
    TrainingUser,
    SearchUser,
    InsertUser,
    UpdateUser,
    DeleteUser,
    UpdateAdm,
    UpdateTreino
}