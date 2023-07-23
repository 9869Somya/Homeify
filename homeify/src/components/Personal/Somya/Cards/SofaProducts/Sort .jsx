import React from "react";
function Sort({ sortOrder, setSortOrder }) {
  function handleChange(e) {
    setSortOrder(e.target.value);
  }

  return (
    <div>
      <h3>Sort By</h3>
      <select onChange={handleChange}>
        <option value={1}>Lowest to Highest</option>
        <option value={2}>Highest to Lowest</option>
      </select>
    </div>
  );
}
export default Sort;
