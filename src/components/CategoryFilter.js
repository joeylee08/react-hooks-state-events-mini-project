import React from "react";

function CategoryFilter({categories, selectCategory}) {
  const buttons = categories.map((item, idx) => {
    return <button onClick={(e) => selectCategory(e, item)} key={idx} value={item}>{item}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {buttons}
    </div>
  );
}

export default CategoryFilter;
