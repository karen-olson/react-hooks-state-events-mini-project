import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ categories, tasks }) {
  const taskComponents = tasks.map((task) => (
    <Task category={task.category} text={task.text} key={uuidv4()} />
  ));

  return <div className="tasks">{taskComponents}</div>;
}

export default TaskList;
