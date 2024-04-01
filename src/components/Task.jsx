import React from 'react'

const Task = ({task}) => {
  return (
    <div className='task'>
       <h5>{task.text}</h5> 
    </div>
  )
}

export default Task