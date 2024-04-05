import TaskModel from '../models/task.model.js';

export const test = (req, res, next) => {
    res.send('Hello World!');
}

export const addTask = async(req, res, next) => {
    try {
        const newTask = await TaskModel.create(req.body);
        return res.status(201).json(newTask);

    } catch (error) {
        return res.status(500).json({ message: error.message.split(":")[2].trim() });
    }
};

export const getTasks = (req, res, next) => {

}

export const updateTask = (req, res, next) => {

}

export const deleteTask = (req, res, next) => {

}