const express = require('express')
const path = require('path')
const {UpdateExercicios} = require("../models/exercicios")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'storage/Maquinas'))
    },
    filename: function (req, file, cb) {
      const extensao = path.extname(file.originalname)
      const {nome,id} = req.body
      UpdateExercicios(id,`storage/Maquinas/${nome}${extensao}`)
      .then((res)=>{
        console.log(res)
      })
      .catch((erro)=>{
        console.log(erro)
      })

      cb(null, `${nome}${extensao}`)
    }
  })
  
  const upload = multer({ storage })

  module.exports = upload