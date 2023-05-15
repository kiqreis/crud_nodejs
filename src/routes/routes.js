const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/UserController.js')

routes.post('/create', UserController.post)
routes.get('/', UserController.show)
routes.get('/show/:id', UserController.showId)
routes.put('/update/:id', UserController.update)
routes.delete('/delete/:id', UserController.delete)

module.exports = { routes }