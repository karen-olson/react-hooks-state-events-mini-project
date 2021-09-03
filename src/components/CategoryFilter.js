import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  // Update this component to display <button> elements
  // for each category (again, make sure to use a key prop).

  const buttons = categories.map((category) => {
    // CHANGING BUTTON CLASSES WHEN CLICKED
    // Create the "All" button with a starting className of selected, and other buttons start with null
    // Whichever button was clicked should have a class of selected.
    // The other buttons should not have any class assigned.

    // Error: Tried to update the button className directly.
    //        This didn't work because you have to trigger an update using state.
    const className = selectedCategory === category ? "selected" : null;
    return (
      <button
        name={category}
        className={className}
        id={category}
        key={uuid()}
        onClick={handleClick}
      >
        {category}
      </button>
    );
  });

  function handleClick(e) {
    // UPDATE STATE TO SHOW WHICH BUTTON WAS SELECTED
    setSelectedCategory(e.target.id);
    console.log(selectedCategory);

    // use the udpated value of selectedCategory to filter the task list
    // filterTaskList();
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
