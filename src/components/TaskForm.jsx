import React, { useState } from "react";

const TaskForm = ({ addNewTask }) => {
  // add state to handle the value
  const [value, setValue] = React.useState("");

  //method to handle the form submission
  const handleSubmit = (e) => {
    //prevent submit for default
    e.preventDefault();
    // if the value is empty do nothing
    if (!value) return;
    // call the addnewTask from prop with provided value
    addNewTask(value);
    //reset the input value to an empty string
    setValue("");
  };
  return (
    <>
      {/*  create a form to handle new task. for starts here. */}
      <form onSubmit={handleSubmit}>
        
        <div className="my-2  mx-auto border-2  w-10/12 justify-center flex items-center rounded-md shadow-md">
        <div>
            <svg
             className="h-10 w-10 text-gray-900"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                fill="#1C274C"
              />
              <path
                d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                fill="#1C274C"
              />
            </svg>
        </div>
        <div class="  w-full">
          {/* take input for task text */}
          <input
            type="search"
            x-model="input1"
            className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
            placeholder="New task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      </form>
      {/* form ends here. */}
      
    </>
  );
};

export default TaskForm;
