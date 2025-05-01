
// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   const [tasks,setTasks]=useState([])
//   const [editAllow,setEditAllow] =useState(false)
//   function handleDeleteTask(deleteTask){
    
//          setTasks(tasks.filter((task,index)=>index!=deleteTask))
//   }
//   function handleAdd(){
//     console.log("Add Btn Clicked")
//     setTasks(tasks.push())
//   }
//   return (
//     <div>
//         {/* Do not remove the main div */}
//         <h1>To Do List</h1>
//        <div className="add_tasks_section"> 
//         <input value className="tasks_section"></input> 
//        <button onClick={handleAdd}>Add</button></div>
//         {tasks.map((task,index)=>{
//           return <div><p className="task" key={index} contentEditable={editAllow}>{task}</p>
//              <button className="edit" onClick={()=>setEditAllow(true)}>Edit</button>
//              <button className="delete" key={index} onClick={()=>handleDeleteTask(index)}>Delete</button>
//              </div>
//         })}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSave = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedTask("");
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To Do List</h1>

      <div className="add_tasks_section">
        <input
          type="text"
          className="tasks_section"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {tasks.map((task, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <>
              <input
                className="task"
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button className="save" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="task">{task}</p>
              <button className="edit" onClick={() => handleEditClick(index)}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
