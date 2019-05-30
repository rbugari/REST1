/* Metodo allDocs
muestra todo la lista de docs

*/
const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const docs=require('../sample.json')
//console.log(docs)

router.get('/',(req,res) => {
    res.json(docs)
})


router.delete('/:id', (req,res) => {
    const { id } = req.params
    console.log(id)
    _.each(docs, (doc, i) => {
        // console.log(doc.idTransac)
        if( doc.idTransac == id ){
            console.log("encontrado")
            docs.splice( i ,1)
            //res.send('deleted')
        }
    })
    //res.send(docs)
  
})

module.exports = router