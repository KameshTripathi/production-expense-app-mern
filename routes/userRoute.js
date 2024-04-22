// import express
const express = require('express')
const { loginController, registerController } = require('../controllers/userController')    // gets automatically imported when loginController is added as an argument.


// create router object to perform routing
const router = express.Router()


// post route for login user
router.post('/login', loginController)  // go to userController.js wherein we create the callback function loginController.
// post route for register user
router.post('/register', registerController)  // go to userController.js wherein we create the callback function registerController.


// export
module.exports = router