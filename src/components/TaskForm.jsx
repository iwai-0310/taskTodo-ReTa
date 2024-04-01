import React,{useState} from 'react'

const TaskForm = ({addNewTask}) => {
// add state to handle the value 
const [value,setValue]=React.useState("");

//method to handle the form submission
const handleSubmit=e=>{
    //prevent submit for default
    e.preventDefault();
    // if the value is empty do nothing
    if(!value) return;
    // call the addnewTask from prop with provided value
    addNewTask(value);
    //reset the input value to an empty string
    setValue("");
}
  return (
    // create a form to handle new task. for starts here.
    <form onSubmit={handleSubmit}>
        {/* take input for task text */}
        <input type="text" className='input'
        value={value} onChange={e=> setValue(e.target.value)} />
    </form>
    // form ends here.
  )
}

export default TaskForm