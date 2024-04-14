import TaskModel from '../models/task.model.js';
import moment from "moment";
import  ExpressValidator, { body, validationResult }  from 'express-validator';
export const test = (req, res, next) => {
    res.send('Hello World!');
}

export const addTask = async(req, res, next) => {
    const errors= validationResult(req);
   if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    try {
        const newTask = await TaskModel.create(req.body);
        return res.status(201).json(newTask);

    } 
    catch (error) {
        //return res.status(500).json({ message: error.message.split(":")[2].trim() });
        next(error)
    }
};

export const getTasks = async(req, res, next) => {
try{
    const tasks=await TaskModel.find()
    if(!tasks)
    {
     return    res.status(404).json({message:"Task not found"})
    }
   return res.status(200).json({task:tasks})
}
catch(error)
{
next(error);
}
}
//new Date("2024-04-10T09:43:004").toLocaleTimeString()
export const updateTask = async(req, res, next) => {
try{
    const updatedtask=await TaskModel.findByIdAndUpdate(req.params.id,req.body,{set:true})
    if(!updatedtask){
 return res.status(404).json({message:"Task not found"})
    }
   return res.status(200).json({task:updatedtask})
}
catch(error)
{
next(error);
}
}

export const deleteTask = async(req, res, next) => {
    try{
const deletedTask=await TaskModel.findByIdAndDelete(req.params.id)
if(!deletedTask){
return res.status(404).json({message:"Task not found"})
}

  return  res.status(200).json({task:deletedTask})
}
catch(error)
{
next(error) 
}
}