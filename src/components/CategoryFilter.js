import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ categories, tasks, setTasks }) {
  // Update this component to display <button> elements
  // for each category (again, make sure to use a key prop).

  const buttons = categories.map((category) => (
    <button className={null} id={category} key={uuid()} onClick={handleClick}>
      {category}
    </button>
  ));

  function handleClick(e) {
    console.log(e.target.classList);

    console.log("buttons: ", buttons);
    debugger;
    // Whichever button was clicked should have a class of selected.
    // The other buttons should not have any class assigned.
    // Access list of buttons and change class only for the one that was clicked
    //    use .map() with if-else inside

    // const updatedButtons = buttons.map((button) => {
    //   if (button.id === e.target.id) {
    //     button.className = "selected";
    //     return button;
    //   } else {
    //     return button;
    //   }
    // });

    // Error: Am I accessing the button's id correctly with button.id?

    // console.log("updated buttons: ", updatedButtons);

    // The list of tasks being displayed should be filtered, so that only
    // tasks that match the category that was clicked are displayed.

    // If the button for "All" is selected, all the tasks should be displayed.
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
