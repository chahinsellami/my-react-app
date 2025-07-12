import React from "react";
import { useState } from "react";

function Greetings({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      <div>Hello, {name}!</div>
      <div style={{ marginTop: "10px", fontSize: "1.2rem" }}>
        You clicked {count} times
      </div>
      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default Greetings;
