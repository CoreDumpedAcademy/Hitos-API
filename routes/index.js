'use strict'

const express = require('express')
const auth = require ('../middlewares/auth')
const admin = require('../middlewares/admin')

/*const userCtrl = require('../controllers/user')*/

const api = express.Router()

/*api.get('/user', userCtrl.getUsers)
api.get('/user/:userId', userCtrl.getUser)
api.post('/user', userCtrl.saveUser)//saveUser)
api.post('/user/log', userCtrl.logUser)
api.put('/user/:userId', userCtrl.updateUser)
api.delete('/user/:userId', userCtrl.deleteUser)*/

api.get('/private', auth (req, res) =>{
res.status(200).send({ message: 'Tienes acceso'})
})
module.exports = api
