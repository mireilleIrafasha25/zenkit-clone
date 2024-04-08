import TaskModel from '../models/task.model.js';

export const test = (req, res, next) => {
    res.send('Hello World!');
}

export const addTask = async(req, res, next) => {
    try {
        const newTask = await TaskModel.create(req.body);
        return res.status(201).json(newTask);

    } 
    catch (error) {
        return res.status(500).json({ message: error.message.split(":")[2].trim() });
    }
};

export const getTasks = async(req, res, next) => {
try{
    const tasks=await TaskModel.find()
    if(!tasks)
    {
        res.status(404).json({message:"Task not found"})
    }
    res.status(200).json({task:tasks})
}
catch(error)
{
console.log(error.message)
res.status(500).json({message:"Internal server error"})
}
}

export const updateTask = async(req, res, next) => {
try{
    const updatedtask=await TaskModel.findByIdAndUpdate(req.params.id,req.body,{set:true})
    if(!updatedtask){
res.status(404).json({message:"Task not found"})
    }
    res.status(200).json({task:updatedtask})
}
catch(error)
{

    console.log(error.message)
    res.status(500).json({message:"Internal server error"})
}
}

export const deleteTask = async(req, res, next) => {
    try{
const deletedTask=await TaskModel.findByIdAndDelete(req.params.id)
if(!deletedTask){
res.status(404).json({message:"Task not found"})
}

    res.status(200).json({task:deletedTask})
}
catch(error)
{
    console.log(error.message)
    res.status(500).json("Internal server error")
}
}