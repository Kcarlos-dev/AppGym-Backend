require('dotenv').config({ path: '../.env' })
const db = require("../config/db")

const SelectExercicios = () => {
    return new Promise((resolve, reject) => {
        const sql = `
       SELECT * FROM EXERCICIOS
    `
        db.query(sql, (error, results) => {
            if (error) {
                reject("ERRO AO CONSULTAR TREINOS")
                console.log(error)
                return
            }
            if (results.length === 0) {
                return reject("Não existe treino registrado")

            }
            resolve(results)
        })
    })
}

const UpdateExercicios = (id,file)=>{
    return new Promise((resolve,reject)=>{
        const sql =`
        UPDATE EXERCICIOS
        SET
        FOTO    = ?
        WHERE
        ID      = ?
        `
        db.query(sql,[file,id],(erro)=>{
            if(erro){
                return reject("ERRO AO ADICIONAR FOTO")
            }
            return resolve("Foto cadastrada com sucesso")
        })

    })
}

const InsertExercicios = (tipo, exercicio, musculos) => {
    return new Promise((resolve, reject) => {
     
        const sql = `
            INSERT INTO EXERCICIOS(
                TIPO,
                EXERCICIO,
                MUSCULOS
            )VALUES(
                ?,
                ?,
                ?
            )
        `
        db.query(sql, [tipo, exercicio,`"${musculos}"`], (error,results) => {
            if (error) {
                return reject("ERRO ao cadastrar Exercicio: " + error)

            }
            return resolve({msg:"Maquina cadastrada com Sucesso",id:results.insertId})
        })
    })
}

const DeleteExercicios = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `
            DELETE 
            FROM 
            EXERCICIOS 
            WHERE 
            ID = ?
        `
        db.query(sql, [id], (error) => {
            if (error) {
                return reject("ERRO ao deltar Exercicio: " + error)
            }
            return resolve("Exercicio deletado com sucesso")
        })
    })

}

module.exports = {
    SelectExercicios,
    UpdateExercicios,
    InsertExercicios,
    DeleteExercicios
}