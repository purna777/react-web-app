import React from "react";
import categories from "../catgories";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        placeholder="All categories"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Category</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </div>
  );
};
