import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        id="taskInput"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button id="addTaskButton" onClick={handleAddTask}>
        Add Todo
      </button>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="deleteButton"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

  
//     const[list,setList] = useState("")
//   return (
//     <>
//     <div>
//         <h1>To-Do List</h1>
//       <input  type="text" onChange={(e)=>{ setList(e.target.value)}} ></input>
//       <button>Add Todo</button>
//     </div>
//     <div>
//   <ul>
//     <li>{list}</li>
//   </ul>

//     </div>
//     </>
//   );
// }

// export default Todo;
