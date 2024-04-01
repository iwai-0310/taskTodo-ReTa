import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
const appTitle="A List you wish to be done !"

function App() {
  const [tasks,setTasks]=useState([
    { text: "cook dinner" },
    { text: "take walk after dinner" },
    { text: "brush before sleep" }
  ]);
  return (
    <div className="app">
      //list of tasks 
      <div className='tasks-list'>
      //map the list here
      task
      </div>
    </div>
  );
}

export default App;
