import React from "react";
import completeTask from "../App";
const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className="w-auto h-auto flex items-center justify-center bg-pin"
      style={{ textDecoration: task.taskDone ? "line-through" : "" }}
    >
      <span className="w-3/4 h-auto ">{task.text}</span>
      <div className="flex items-center justify-center">
        {/* button with svg to mark task as done */}
        <div className="w-auto h-auto mx-4 my-2 px-4 py-1">
          <div className="flex-1 h-full">
            <div
              onClick={() => completeTask(index)}
              className="flex items-center justify-center flex-1 h-full p-2 border border-green-500
               text-white shadow rounded-lg cursor-pointer hover:border-2 hover:border-green-700"
            >
              <div className="relative">
                <svg
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z"
                    fill="#0F1729"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/*button with svg to delete a task  */}
        <div className="w-auto h-auto">
          <div className="flex-1 h-full">
            <div
              onClick={() => removeTask(index)}
              className="flex items-center justify-center flex-1 h-full p-2 bg-red-500
              cursor-pointer hover:border-2 border-black text-white shadow rounded-lg"
            >
              <div className="relative">
                <svg
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 7H20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
