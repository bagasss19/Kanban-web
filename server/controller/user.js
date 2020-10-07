const { User } = require('../models')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const {generateToken} = require('../helper/jwt')
const {comparePass} =require('../helper/bcrypt')
const axios = require('axios')

class Controller {
    static register (req,res,next) {
        User.create(req.body)
        .then(data => {
            res.status(201).json({id : data.id,email : data.email})
        })
        .catch(err => {
            next(err)
            console.log(err);
        })
    }

    static login (req,res,next) {
        const {email, password} = req.body
        User.findOne({
            where : {
                email
            }
        })
        .then(data => {
            if (!data) throw ({msg : "invalid email or password!", code : 400})
             let checkPass = comparePass(password, data.password)
            if (!checkPass) throw ({msg : "invalid email or password!", code : 400})
            let param = {
                id : data.id,
                email : data.email
            }
            let token = generateToken(param)
            res.status(200).json({token})
        })
        .catch(err => {
            next(err)
        })
    }

    static googleSign (req, res, next) {
        let email;
        client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket=>{
            let payload = ticket.getPayload();
            email = payload.email
            console.log(email,' ini email dari google')
            
            return User.findOne({
                    where : {
                    email
                }
            })
        })
        .then(data => {
            if(data) {
                return data;
            } else {
                //let password = "1234"
                return User.create({
                   email : email,
                   password : "123456adfewgvadvdwg7"
                });
            }
        })
        .then(data => {
            //console.log(data.dataValues);
            let newPayload = {
                email : data.email,
                id : data.id
            }
            let token = generateToken(newPayload)
            res.status(200).json({token})
        })
        .catch(err => {
            next(err)
            console.log(err);
        })
    }
}

module.exports =  Controller