import React from "react";

//need state up here? 
//connect state to the input field
//input's value should always be in sync with state

//event listener for onChange input
//setstate, use onSearchChange as a callback

function Filter({ onCategoryChange, onSearchChange, search, selectedCategory }) {
  function handleSearchChange(e) {
    onSearchChange(e.target.value)
  }
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleSearchChange} value={search}/>
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
