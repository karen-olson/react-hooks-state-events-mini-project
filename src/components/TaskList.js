import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks, setTasks }) {
  const taskComponents = tasks.map((task) => (
    <Task
      category={task.category}
      text={task.text}
      key={uuidv4()}
      id={task.text}
      handleDelete={handleDelete}
    />
  ));

  function handleDelete(e) {
    const updatedTasks = tasks.filter((task) => e.target.id !== task.text);
    setTasks(updatedTasks);
  }

  return <div className="tasks">{taskComponents}</div>;
}

export default TaskList;
