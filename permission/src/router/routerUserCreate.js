const express = require('express')
const router = express.Router()

const userController = require('../controller/controllerUser')



<<<<<<< HEAD
router.get('/user/:id', userController.getBayId)
router.get('/user/', userController.getUsersAll)

=======
router.get('/user', userController.getUsersAll)
>>>>>>> 2c5e13bb6e2617ad7adfc57da0bc9592f5ea52f8


router.get('/user/test',(req, res, next) =>{
  res.send("running perfectly")
})


module.exports = router