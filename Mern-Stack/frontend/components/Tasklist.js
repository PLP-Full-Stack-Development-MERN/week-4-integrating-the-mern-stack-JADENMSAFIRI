import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const { data } = await getTasks();
        setTasks(data);
    };

    return (
        <div className="p-5">
            {tasks.map(task => (
                <div key={task._id} className="p-4 bg-gray-200 my-2 flex justify-between">
                    <div>
                        <h2 className="text-xl font-bold">{task.title}</h2>
                        <p>{task.description}</p>
                        <p>Status: {task.status}</p>
                        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <button onClick={() => onEdit(task)} className="bg-blue-500 px-3 py-1 text-white">Edit</button>
                        <button onClick={() => { deleteTask(task._id); fetchTasks(); }} className="bg-red-500 px-3 py-1 text-white ml-2">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
