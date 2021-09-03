import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

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
