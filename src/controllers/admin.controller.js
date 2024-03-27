import { Admin } from "../models/admin.model.js"


const adminLogin = async(req, res) => {
    try {
        if(!req.body) {
            return res.status(400).json({message: 'body is not found'})
        }

        const {name, email, password, secretCode} = req.body

        if(undefined in [name, email, password, secretCode]) {
            return res.status(400).json({message: 'any one field is empty'})
        }

        const response = await Admin.findOne({$and: [{email}, {password}, {secretCode}]})

        if(!response) {
            return res.status(400).json({message: 'Sorry, no any admin is found', status: false})
        }

        return res.status(200).json({message: 'authorized', status: true})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'Unable to run the code of adminLogin'})
    }
}

export {adminLogin}