/* Metodo getRemito
Permite traer un remito con el idTransac como parametro

*/
const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const docs = require("../sample.json");
//console.log(docs)

router.get('/:id', (req,res) => {
  const { id } = req.params
  console.log(id)
  _.each(docs, (doc, i) => {
      // console.log(doc.idTransac)
      if( doc.idTransac == id ){
          console.log("encontrado")
          res.send(doc)
      }
  })
})
 
module.exports = router
