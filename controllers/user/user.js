const express = require('express')
const {User} = require('../../models/user')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res)=> {
    const {email, password} = req.body;

    const user = await User.findOne({email: email});
    if(!user){
        return res.status(400).json({msg: 'User does not exist'});
    }
    if(user.password == password){
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET , (err, token)=> {
            if(err) throw err;
    
            res.header({"x-auth-token": token}).json({
                token: token,
                user:{
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
            });
        } )
    } else {
        return res.status(400).json({msg: 'Password is incorrect'});
    }
}

module.exports.userLogin = userLogin