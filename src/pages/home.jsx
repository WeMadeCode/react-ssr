import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// 导入了两个 action 函数
import { increment, fetchHomeData } from "../store/modules/home";

// ui = f(state)
const Home = function () {
  console.log("Home render");

  // 1.读取数据
  const { counter, homeInfo } = useSelector((rootState) => {
    return {
      counter: rootState.home.counter,
      homeInfo: rootState.home.homeInfo,
    };
  });

  // 2.触发action
  const dispatch = useDispatch();
  // 同步action
  function addCounter() {
    dispatch(increment(2));
  }
  // 异步action
  function getHomeData() {
    var range = 100 - 1;
    var random = Math.random();
    const value = 1 + Math.round(random * range);
    dispatch(fetchHomeData({ a: value }));
  }
  return (
    <div className="Home" style={{ border: "2px solid green", margin: "10px" }}>
      <h3>Home</h3>
      <div>数值：{counter}</div>
      <button onClick={addCounter}>+2</button>
      <div>状态：{JSON.stringify(homeInfo)}</div>
      <button onClick={getHomeData}>获取首页数据</button>
    </div>
  );
};

export default Home;
