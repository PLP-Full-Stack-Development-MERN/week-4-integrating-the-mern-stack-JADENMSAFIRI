import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';




const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const refresh = () => setSelectedTask(null);

  return (
      <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center my-5">Task Manager</h1>
          <TaskForm selectedTask={selectedTask} refresh={refresh} />
          <TaskList onEdit={setSelectedTask} />
      </div>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
