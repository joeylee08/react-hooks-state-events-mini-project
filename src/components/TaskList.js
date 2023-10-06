import React from "react";
import Task from "./Task.js";

function TaskList({tasks, deleteTask, category}) {
  const filtered = tasks.filter(item => {
    if (category === "All") return true;
    return item.category === category
  })
  const mapped = filtered.map((item, idx) => {
    return <Task key={idx} text={item.text} category={item.category} deleteTask={deleteTask}/>
  })
  
  return (
    <div className="tasks">
      {mapped}
    </div>
  );
}

export default TaskList;
