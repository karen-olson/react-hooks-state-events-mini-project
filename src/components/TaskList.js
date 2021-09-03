import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({
  tasks,
  setTasks,
  selectedCategory,
  setSelectedCategory,
  onTaskFormSubmit,
}) {
  function filterTasks() {
    if (selectedCategory === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.category === selectedCategory);
    }
  }

  const taskComponents = filterTasks().map((task) => (
    <Task
      category={task.category}
      text={task.text}
      key={uuidv4()}
      id={task.text}
      handleDelete={handleDelete}
    />
  ));

  function handleDelete(e) {
    const tasksToDisplay = tasks.filter((task) => e.target.id !== task.text);
    setTasks(tasksToDisplay);
  }

  return <div className="tasks">{taskComponents}</div>;
}

export default TaskList;
