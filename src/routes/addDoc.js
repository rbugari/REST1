/* Metodo addRemito
Permite ingresar un JSON con los datos del remito deberia tener el siguiente formato
{
	"idTransac":99,
    "idProvider": 5,
    "idCustomer": 1,
    "URLFile": "dddddddd",
    "code": "OxcccSSS"
}

*/

const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const docs=require('../sample.json')
//console.log(docs)


router.post('/',(req,res) => {
    console.log(req.body)
    const {idTransac,idProvider,idCustomer,URL,code}=req.body
    if (idTransac){
        
        const NewDoc = {...req.body}
        docs.push(NewDoc)
        res.send("insertado Correctamente")

    }else{
        res.send("Wrong Request")
    }
    
})

module.exports = router