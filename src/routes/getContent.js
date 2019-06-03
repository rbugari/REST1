/* Metodo getContent
Permite traer un contenido definido de con el key como como parametro

*/
const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const ensureToken = require("./helper")
//const contents = require("../sample.json");
//console.log(docs)

// Models
const Contentenido = require('../models/Content.js')


router.get('/:key',ensureToken, async (req,res) => {
  const { key } = req.params
  console.log('el key solicitado : ',key)
  // busqueda en la Base
  const Cont = await Contentenido.find({key});
  console.log("Encontrado",Cont)
  res.send(Cont)
})

 
module.exports = router
