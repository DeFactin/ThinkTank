// login user

const User = require('../models/userModel')

const loginUser = async (req, res) => {

    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {loginUser}