import React from 'react'
import completeTask from "../App"
const Task = ({task,index,completeTask,removeTask}) => {
  return (
    <div className='task'
    style={{textDecoration:task.taskDone ? "line-through":""}}
    >
       {task.text}
       <div>
        <button onClick={()=>completeTask(index)}>DONE</button>
        <button onClick={()=>removeTask(index)}>X</button>
       </div>
    </div>
  )
}

export default Task