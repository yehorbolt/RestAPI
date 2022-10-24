
// import
const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.send('RestfulAPI with users collection')
})

module.exports = router;