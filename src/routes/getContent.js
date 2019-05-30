/* Metodo getContent
Permite traer un contenido definido de con el key como como parametro

*/
const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const contents = require("../sample.json");
//console.log(docs)

router.get('/:key', (req,res) => {
  const { key } = req.params
  console.log('el id solicitado : ',key)
  _.each(contents, (content, i) => {
      if( content.key == key ){
        console.log("clave encontrada: ",content.key)
          res.send(content)
          return
      }
  })
})

 
module.exports = router
