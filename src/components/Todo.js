import React, { useState } from 'react';

const Todo = () => {
    const [newTodo , setNewTodos] = useState('');
    const [todos, setTodos] = useState([]);
    
    const handleInputChange = (event) => {
      setNewTodos(event.target.value);
    } 
  
    const addTodo = (event) => {
      event.preventDefault();
      if(newTodo.trim() !== ''){
        setTodos([...todos , newTodo]);
        setNewTodos('');
        // bjj
      }
    }
  
    const deleteTodo = (index) => {
      const upDateElement = [...todos];
      upDateElement.splice(index, 1);
      setTodos(upDateElement)
    }
  
    const list = todos.map((todo, index) => (
        <li key={index}>
        <div> {todo}</div>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    ));
  
    return (
      <div>
        <h2>To-Do-List</h2>
        <form onSubmit={addTodo} style={{width:"400px"}}>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter new element"
            style={{width:"300px"}}
          />
          <button type="submit" style={{width:"90px"}}>Add Todo</button>
        </form>
      
        <ul>
          {list}
        </ul>
        
      </div>
    )
  }
  
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

export default Todo;
