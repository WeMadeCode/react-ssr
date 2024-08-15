import React, { useState } from "react";

const Person = function () {
  console.log("Person did Rendered");
  const [globalState, setGlobalState] = useState({});

  const setState = async () => {
    const response = await fetch("/api/home/setState");
    const data = await response.json();
    setGlobalState(data);
  };

  const getState = async () => {
    const response = await fetch("/api/home/getState");
    const data = await response.json();
    setGlobalState(data);
  };

  return (
    <div style={{ border: "2px solid orange", margin: "10px" }}>
      <button onClick={setState}>Set Global State</button>
      <button onClick={getState}>Get Global State</button>
      <div>
        <p>Global State: {JSON.stringify(globalState)}</p>
      </div>
    </div>
  );
};

export default Person;
