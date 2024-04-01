import logo from './logo.svg';
import {useState} from 'react';
import Task from './components/Task';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {
  //add state to handle tasks
  const [tasks,setTasks]=useState([
    { text: "cook dinner",taskDone: false },
    { text: "take walk after dinner",taskDone: false },
    { text: "brush before sleep",taskDone: false }
  ]);
  //New tasks with the text form current task added.
  const addNewTask= text=>{
    //create new array using spread and add text of new task
    const newTasks=[...tasks,{text}];
    //update the tasks state with new Tasks
    setTasks(newTasks);
  }
  //function to handle completed tasks
  const completeTask=index=>{
    //copy the existing tasks array
    const newTasks=[...tasks];
    // Mark the task at  index to done
    newTasks[index].taskDone=true;
    //update the task using State
    setTasks(newTasks);
  }

  // function to delete tasks
  const removeTask=index=>{
     //copy the existing tasks array
    const newTasks=[...tasks];
     //remove the element with index
    newTasks.splice(index,1);
    //update the task list with state
    setTasks(newTasks);
  }
  return (
    <div className="app">
      {/* //list of tasks  */}
      <div className='tasks-list'>
      {/* map the list here */}
      {tasks.map((task,index)=>(
        // for every index pass the task as prop to Task component
        <Task key={index} index={index} task={task} completeTask={completeTask}
        removeTask={removeTask}/>
      ))}
      <TaskForm addNewTask={addNewTask}/>
      </div>
    </div>
  );
}

export default App;
