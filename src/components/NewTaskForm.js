import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");
  
  
  const renderOptions = categories.map((category)=> {
    if (category === "All") {
      return null
    } else {
      return <option key={category}>{category}</option>
    }
  })
  
  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({ text, category })
    setText("")
    setCategory("Code")
  }

  
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={(event)=> setCategory(event.target.value)}
        >
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
