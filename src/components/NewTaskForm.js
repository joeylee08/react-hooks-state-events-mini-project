import React from "react";

function NewTaskForm({categories, updateFormData, addTask, text, category}) {
  const filtered = categories.filter(item => item !== "All")
  const options = filtered.map((item, idx) => {
    return <option key={idx} value={item}>{item}</option>
  })
  return (
    <form onSubmit={addTask} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={updateFormData}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={updateFormData}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
