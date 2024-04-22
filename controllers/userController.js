const userModel = require('../models/userModel')


// login callback
const loginController = async (req, res) => {
    try {   // we check the values of email and password passed by user with those stored in db. Based upon this we provide the login functionality in loginController.
        const {email, password} = req.body  // destructuring email and pass from req.body
        const user = await userModel.findOne({email, password})
        if (!user) {    
            return res.status(404).send('user not found')
        }
        res.status(200).json({  // if user is found
            success: true,
            user
        })  
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}
// register callback
const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            suceess: true,
            newUser
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}


// export
module.exports = {loginController, registerController}