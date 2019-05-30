/* Metodo addContent
Permite ingresar un JSON con los datos del remito deberia tener el siguiente formato
{
    "key": 4,
    "type": "1",
    "data": {
        "idTransac": 2,
        "idProvider": 2,
        "idCustomer": 2,
        "URLFile": "https://s3.us-east-2.amazonaws.com/cocaimagenes/Argentina/CocaCola/237+ml+CC+Light+FR_baja.png"
    },
    "hash": "b9801dee251bd52031740a5c0097a96eb5e4f3875f07097e99960a5b10be2f55",
    "tags": [
        "tag2"
    ]
}

*/

const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const docs=require('../sample.json')
//console.log(docs)


router.post('/',(req,res) => {
    console.log(req.body)
    const key =req.body.key
    console.log ('clave a ingresar : ', key)
    // si la clave no es null
    if (key){
        
        const NewContent = {...req.body}
        docs.push(NewContent)
        res.send("insertado Correctamente")
    }else{
        res.send("Wrong Request key: ", key)
    }
    
})

module.exports = router