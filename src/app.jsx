import React, { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";

const App = function () {
  console.log("App Render");

  const [counter, setCounter] = useState(100);
  function addCounter() {
    console.log("+1");
    setCounter(counter + 1);
  }
  return (
    <div className="app" style={{ border: "1px solid red" }}>
      <h2>App</h2>
      <div>数值：{counter}</div>
      <button onClick={addCounter}>+1</button>

      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/person">
          <button>Person</button>
        </Link>
      </div>
      {/* 页面的占位 */}
      {useRoutes(routes)}
    </div>
  );
};

export default App;
