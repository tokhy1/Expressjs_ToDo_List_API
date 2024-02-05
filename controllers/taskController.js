const Task = require('../models/Task');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (tasks.length == 0) return res.status(200).json({ message: "You don't have any tasks yet!" });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json({ message: "New Task added successfully!", task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const dataToUpdate = req.body;
        await Task.findByIdAndUpdate(id, dataToUpdate, { new: true });
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};