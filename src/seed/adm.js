const db = require('../config/db')
const passwordHash = require('password-hash')

let password = passwordHash.generate("1234")

const CreateAdm = ()=>{
    
    const sql = `
                INSERT INTO USERS(
                    ID_USER,
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
                    ?,
                    ?
                )
            `
            db.query(sql,[1,"Adm", "adm@adm.com", "0", "2000-01-11", password, '{"teste":"teste"}'], (error, results)=>{
                if (error) {
                    if (error.code === 'ER_DUP_ENTRY') {
                        console.log('Usuário 01 já existe');
                    } else {
                        console.error('Erro ao inserir usuário:', error.message);
                    }
                } else {
                    console.log('Usuário 01 cadastrado com sucesso');
                }
            })

}

module.exports = CreateAdm()