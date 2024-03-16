import React from "react";

export default function Card() {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
        className="card-img-top"
        alt="..."
      />
      <h3 className="card-title">Double Cheese Pizza</h3>
      <p className="card-text">Bla .......</p>
      <div className="container w-100">
        <select className="m-2 h-100 bg-success rounded">
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {" "}
                {i + 1}{" "}
              </option>
            );
          })}
        </select>
        <select className="m-2 h-100  bg-success rounded">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
      </div>
    </div>
  );
}
