import React, { useState } from 'react';
import { addTask, updateTask } from '../services/taskService';

const TaskForm = ({ selectedTask, refresh }) => {
    const [task, setTask] = useState(selectedTask || { title: '', description: '', status: 'pending', dueDate: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        selectedTask ? await updateTask(task._id, task) : await addTask(task);
        refresh();
    };

    return (
        <form onSubmit={handleSubmit} className="p-5">
            <input type="text" placeholder="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} className="border p-2 w-full mb-2" required />
            <textarea placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} className="border p-2 w-full mb-2"></textarea>
            <button type="submit" className="bg-green-500 px-4 py-2 text-white">{selectedTask ? 'Update' : 'Add'} Task</button>
        </form>
    );
};

export default TaskForm;
