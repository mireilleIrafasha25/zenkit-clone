import TaskModel from '../models/task.model.js';

export const test = (req, res, next) => {
    res.send('Hello World!');
}
export const SetTime=(req,res,next)=>
{
    console.log(req.body.dueDate)
    var startTime="";
    var endTime="";
    if(req.body.dueDate.startDate){
        startTime=new Date(req.body.dueDate.startDate).toLocaleTimeString();
    }
    if(req.body.dueDate.endDate){
    endTime=new Date(req.body.dueDate.endDate).toLocaleTimeString();
    }
    req.body.dueDate.startTime=startTime;
    req.body.dueDate.endTime=endTime;
    console.log(req.body.dueDate);
    //your task
    //calculate the duration of your task
    // determine whether  duration  is min ,sec or hours 

    next();
}
export const addTask = async(req, res, next) => {
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
new Date("2024-04-10T09:43:004").toLocaleTimeString()
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