import { useState } from "react";
import "./Category.css";

export default function Category({ categories, setCategories }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Tech", "Cyber", "Programming", "Mobile", "News", "Other"];

  console.log(categories);

  return (
    <div className="dropdown">
      <span className="catTitle">Choose One Category:</span>
      <div className="dropwdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {categories}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((p) => (
            <div
              onClick={(e) => {
                setCategories(p);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {p}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
