import React from 'react'
import completeTask from "../App"
const Task = ({task,index,completeTask}) => {
  return (
    <div className='task'
    style={{textDecoration:task.taskDone ? "line-through":""}}
    >
       {task.text}
       <div>
        <button onClick={()=>completeTask(index)}>DONE</button>
       </div>
    </div>
  )
}

export default Task