const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const docs=require('../sample.json')
//console.log(docs)

router.get('/',(req,res) => {
    res.json(docs)
})



router.post('/',(req,res) => {
    console.log(req.body)
    const {idTransac,idProvider,idCustomer,URL,code}=req.body
    if (idTransac){
        
        const NewDoc = {...req.body}
        docs.push(NewDoc)
        res.send(docs)

    }else{
        res.send("Wrong Request")
    }
    
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