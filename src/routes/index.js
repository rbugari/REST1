const { Router } = require('express')
const router = Router()

router.get('/',(req,res) => {
    res.json({"Tile" : "API demo test of Remitos"})
})

/* router.get('/GetDoc',(req,res) => {
    const data = {
        "idProvider": 1,
        "idCustomer": 1,
        "URL":"dddddddd",
        "code" : "OxcccSSS"
    }
    res.json(data)
}) */

module.exports = router