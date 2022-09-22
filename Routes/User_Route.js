var User_controler = require('../Controlers/User_controler')
const express = require('express')
const User = require('../Models/User')
const router = express.Router()

router.post('/add',User_controler.ADD)
router.get('/all',User_controler.GET)
router.put('/update',User_controler.Update)
router.delete('/delete',User_controler.Delete)
module.exports = router