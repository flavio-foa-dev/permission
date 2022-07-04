const express = require('express')
const router = express.Router()

const userController = require('../controller/controllerUser')



router.get('/user/:id', userController.getBayId)
router.get('/user/', userController.getUsersAll)



router.get('/user/test',(req, res, next) =>{
  res.send("running perfectly")
})


module.exports = router