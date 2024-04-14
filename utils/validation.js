import {body} from 'express-validator';
const ValidateTaskName=[body("name").notEmpty().withMessage("Task name must be required")];
 export default ValidateTaskName;