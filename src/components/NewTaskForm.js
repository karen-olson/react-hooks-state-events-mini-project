import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Code");
  // const [newTaskSubmitted, setNewTaskSubmitted] = useState(false);

  // Pass the list of categories to this component from App
  // Then, update this component to display <option> elements for each category inside of the
  // <select> element except the "All" category, so that the user can select a category when
  // adding a new task.
  const categoryOptionElements = categories.map((category) => {
    if (category === "All") {
      return null;
    } else {
      return <option key={uuidv4()}>{category}</option>;
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { text: name, category: category };
    onTaskFormSubmit(newTask);
  }

  // Next, update this form to be a controlled component, so that all form inputs are captured in state.

  // When the form is submitted, add a new task to the list with the text and category from the form.
  // You'll need a callback prop named onTaskFormSubmit for the tests to pass for this feature.

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
