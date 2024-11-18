import React, { useState } from "react";
import "./ArrayStateVariable.css"; // Make sure to create this CSS file

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success add-btn">
        Add Element
      </button>
      <ul className="array-list">
        {array.map((item, index) => (
          <li key={index} className="array-item">
            <span className="item-number">{item}</span>
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
