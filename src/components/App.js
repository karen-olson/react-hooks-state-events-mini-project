import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // Does tasks need to be a stateful variable?
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={tasks}
        setTasks={setTasks}
      />
      <NewTaskForm />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
