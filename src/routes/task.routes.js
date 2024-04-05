import express from 'express';
const taskRouter = express.Router();
import { test, addTask, deleteTask, getTasks, updateTask } from '../controllers/task.controller.js';

taskRouter.get('/test', test);
taskRouter.post('/add', addTask);
taskRouter.get('/list', getTasks);
taskRouter.put('/update/:id', updateTask);
taskRouter.delete('/delete/:id', deleteTask);

export default taskRouter;