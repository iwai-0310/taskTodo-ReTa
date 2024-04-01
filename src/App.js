import logo from './logo.svg';
import {useState} from 'react';
import Task from './components/Task';
import './App.css';
import TaskForm from './components/TaskForm';



function App() {
  //add state to handle tasks
  const [tasks,setTasks]=useState([
    { text: "cook dinner" },
    { text: "take walk after dinner" },
    { text: "brush before sleep" }
  ]);
  return (
    <div className="app">
      {/* //list of tasks  */}
      <div className='tasks-list'>
      {/* map the list here */}
      {tasks.map((task,index)=>(
        // for every index pass the task as prop to Task component
        <Task key={index} index={index} task={task}/>
      ))}
      <TaskForm addNewTask={addNewTask}/>
      </div>
    </div>
  );
}

export default App;
