const Routs=require('express').Router()
const {login,signup}=require('../controller/user_controller')


Routs.post('/signin',login)
Routs.post('/signup',signup)

module.exports=Routs;