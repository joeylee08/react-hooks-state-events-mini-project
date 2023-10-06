import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  //pass to TaskList to render
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All")

  //pass destructured to NewTaskForm for its inputs
  const [formData, setFormData] = useState({
    text: "",
    category: "Misc"
  })

  //pass to CategoryFilter to render category buttons
  //pass to NewTaskForm to render category options
  const categories = CATEGORIES;

  function updateFormData(e) {
    let key = e.target.name;
    let value = e.target.value;
    let formInputs = {
      ...formData,
      [key]: value
    }
    setFormData(() => formInputs)
  }

  //pass to NewTaskForm for onSubmit
  function addTask(e) {
    e.preventDefault()
    if (formData.text.trim() === "") return
    if (formData.category.trim() === "") return
    setTasks([
      ...tasks,
      formData
    ])
  }

  //pass to Task for button onClick
  function deleteTask(text) {
    const updated = tasks.filter(item => {
      return item.text !== text
    })
    setTasks(updated)
  }

  //pass to CategoryFilter for onChange
  function selectCategory(e, category) {
    for (let elem of e.target.parentNode.children) {
      elem.classList.remove('selected')
    }
    e.target.classList.add('selected')
    setCategory(() => category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectCategory={selectCategory} />
      <NewTaskForm updateFormData={updateFormData} categories={categories} addTask={addTask} {...formData}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} category={category}/>
    </div>
  );
}

export default App;
