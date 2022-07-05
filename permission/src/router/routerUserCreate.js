const express = require('express')
const router = express.Router()

const userController = require('../controller/controllerUser')




router.get('/user/:id', userController.getBayId)
router.get('/user/', userController.getUsersAll)
router.post('/user/', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.remove)





router.get('/user/test',(_req, res) =>{
  res.send("running perfectly")
})

module.exports = router