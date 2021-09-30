
const Todo = require('../models/todo')

exports.createTodo=async (req,res)=>{
    try {
        const data1=await new Todo({
            todo:req.body.todo,
            todoBy:req.data.id
        })
        await Todo.insertMany(data1)
        .then((data)=>{
            res.status(200).json({message:"succefully add todd"})
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
};

exports.getTodo=async (req,res)=>{
    try {
        const data=await Todo.find({todoBy:req.data.id})
        res.status(200).json({message:data})
    } catch (error) {
        console.log(error);
    }
};

exports.removeTodo=async (req,res)=>{
    try {
        const data=await Todo.findByIdAndRemove({_id:req.params.id})
        res.status(200).json({message:data})

    } catch (error) {
        console.log(error);
    }
}


exports.updateTodo=async (req,res)=>{
    try {
        const todoData={
            todo:req.body.todo
        }
        id=req.params.id
        const data= await Todo.findByIdAndUpdate(id,todoData)
        .then((mes)=>{
            res.status(200).json({message:mes})
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}