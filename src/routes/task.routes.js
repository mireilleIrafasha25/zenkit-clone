import express from 'express';
const taskRouter = express.Router();
import { test, addTask, deleteTask, getTasks, updateTask} from '../controllers/task.controller.js';
import ValidateTaskName from '../../utils/validation.js';
import  {setTime } from '../../middleware/errorHandler/time.js';
taskRouter.get('/test', test);
taskRouter.post('/add',ValidateTaskName,setTime, addTask);
taskRouter.get('/list', getTasks);
taskRouter.put('/update/:id', updateTask);
taskRouter.delete('/delete/:id', deleteTask);

export default taskRouter;