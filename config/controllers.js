const crypto = require('crypto');
const User = require("../model/User")

const signUp = async (req,res) => {
    try{
        const {username, password} = req.body
        const existingUser = await User.findOne({username})

        if(existingUser){
            return res.status(409).json({message: "Username already exist"})
        }

        const hashPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
        const user = await User.create({username, password:hashPassword})
        res.status(201).json({ message:"user register completed" });
    } catch(err){
        console.log(err)
        res.status(500).json({message: "Something wen wrong"})
    }
} 

module.exports = signUp