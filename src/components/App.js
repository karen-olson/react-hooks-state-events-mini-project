import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // filterTaskList isn't getting the updated value of selectedCategory
  // because it's called from within handleClick where setSelectedCategory
  // is also called

  // Need to call filterTaskList() in a way that it will get the most recently
  // updated value of selectedCategory

  // Trial: define an arrow function that calls filterTaskList()
  // Error: still doesn't get updated value

  // Trial: create a filterTaskList array in App that uses .filter() to 
  //        return an array of tasks to display. Then setTasks(tasksToDisplay)
  // Error: infinite loop - just keeps filtering 

  // Trial: call filterTaskList() somewhere else --> where?
  //        When do we want it to be triggered? 
  //        When a category button is clicked.
  //        Where else (besides the click event listener) could it be called?
  //        Nowhere?


  function filterTaskList() {
    const tasksToDisplay = tasks.filter((task) => {
      if (selectedCategory === "All") {
        return true;
      } else {
        return task.category === selectedCategory;
      }
    });

    console.log(tasksToDisplay);

    setTasks(tasksToDisplay);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={tasks}
        setTasks={setTasks}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filterTaskList={filterTaskList}
      />
      <NewTaskForm />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default App;
