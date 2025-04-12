const userModel = require('../models/users')

const BuscarTreino = (req, res) => {
    const { id, email } = req.query

    if (
        id.trim().length <= 0
        || email.trim().length <= 0

    ) {
        res.json("Falta preencher algo campo")
    }
    userModel.TrainingUser(id, email)
        .then((message) => res.json({ status: 200, message }))
        .catch((error) => res.status(500).json({ status: 500, message: error }))


}

const CriarUsuario = (req, res) => {
    const { name, email, cpf, data_nasc, senha } = req.body
    if (name.trim().length <= 0
        || email.trim().length <= 0
        || cpf.trim().length <= 0
        || data_nasc.trim().length <= 0
        || senha.trim().length <= 0
    ) {
        res.json("Falta preencher algo campo")
    }
    let json_treino = {
        "superiores": [
            { "exercicio": "Supino reto", "musculos": ["Peitoral maior", "Tríceps braquial", "Deltoide anterior"] },
            { "exercicio": "Supino inclinado", "musculos": ["Peitoral maior (porção clavicular)", "Tríceps braquial", "Deltoide anterior"] },
            { "exercicio": "Desenvolvimento com halteres", "musculos": ["Deltoide anterior", "Tríceps braquial", "Trapézio"] },
            { "exercicio": "Elevação lateral", "musculos": ["Deltoide lateral", "Trapézio"] },
            { "exercicio": "Rosca direta", "musculos": ["Bíceps braquial", "Braquial", "Braquiorradial"] },
            { "exercicio": "Rosca martelo", "musculos": ["Braquial", "Bíceps braquial", "Braquiorradial"] },
            { "exercicio": "Tríceps corda", "musculos": ["Tríceps braquial"] },
            { "exercicio": "Tríceps francês", "musculos": ["Tríceps braquial"] }
        ],
        "inferiores": [
            { "exercicio": "Agachamento hack", "musculos": ["Quadríceps", "Glúteo máximo", "Posterior de coxa"] },
            { "exercicio": "Leg press", "musculos": ["Quadríceps", "Glúteo máximo", "Posterior de coxa"] },
            { "exercicio": "Cadeira extensora", "musculos": ["Quadríceps"] },
            { "exercicio": "Cadeira flexora", "musculos": ["Posterior de coxa"] },
            { "exercicio": "Panturrilha em pé", "musculos": ["Gastrocnêmio"] },
            { "exercicio": "Panturrilha sentado", "musculos": ["Sóleo"] }
        ]
    }
    let treino = JSON.stringify(json_treino)

    userModel.InsertUser(name, email, cpf, data_nasc, senha, treino)
        .then((message) => res.json({ status: 200, message }))
        .catch((error) => res.status(500).json({ status: 500, message: error }))

}

const AtualizarAdm = (req, res) => {
    const { nome, email, cpf, data_nasc, senha } = req.body
    const id = req.params.id
    if (   id.trim().length           <= 0
        || email.trim().length        <= 0
        || nome.trim().length         <= 0
        || data_nasc.trim().length    <= 0
        || senha.trim().length        <= 0
        || cpf.trim().length          <= 0
    ) {
        res.json("Falta preencher algo campo")
    }
    userModel.UpdateAdm(nome, email, cpf, data_nasc, senha,id)
    .then((message) => res.json({ status: 200, message }))
    .catch((error) => res.status(500).json({ status: 500, message: error }))
}

const AtualizarUsuario = (req, res) => {
    const { alter, nome, senha, nv_senha } = req.body
    const id = req.params.id
    if (id.trim().length <= 0
        || alter.trim().length <= 0
        || nome.trim().length <= 0
        || senha.trim().length <= 0
        || nv_senha.trim().length <= 0
    ) {
        res.json("Falta preencher algo campo")
    }
    userModel.UpdateUser(alter, id, nome, senha, nv_senha)
        .then((message) => res.json({ status: 200, message }))
        .catch((error) => res.status(500).json({ status: 500, message: error }))
}

module.exports = {
    CriarUsuario,
    AtualizarAdm,
    AtualizarUsuario,
    BuscarTreino
}