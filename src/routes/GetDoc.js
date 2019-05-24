const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const docs=require('../sample.json')
//console.log(docs)


router.get('/',(req,res) => {
    res.send('GetDoc')
})

module.exports = router