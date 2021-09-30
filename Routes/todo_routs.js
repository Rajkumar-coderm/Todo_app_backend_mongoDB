const express=require('express')
const routs=express.Router()
const {createTodo,getTodo,removeTodo,updateTodo}=require('../controller/todo_controller')
const { authenticateToken} = require('../middlewear/jwt')

routs.post('/createtodo',authenticateToken,createTodo)
routs.get('/gettodo',authenticateToken,getTodo)
routs.delete('/remove/:id',authenticateToken,removeTodo)
routs.put('/updateTodo/:id',authenticateToken,updateTodo)

module.exports=routs;
