import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 接受切片名称、初始状态值和reducer函数的对象，并自动生成切片Reducer，并且带有相应的actions。
const homeSlcie = createSlice({
  name: "home",
  initialState: {
    counter: 1000,
    homeInfo: { a: "0" },
  },
  reducers: {
    increment(state, { payload }) {
      console.log("payload =  ", payload);
      state.counter += payload;
    },
  },
  extraReducers: (buidler) => {
    buidler.addCase(fetchHomeData.pending, (state, { payload, type }) => {
      console.log("pending");
    });
    buidler.addCase(fetchHomeData.fulfilled, (state, { payload, type }) => {
      console.log("fulfilled");
      console.log("type = ", type);
      console.log("payload = ", payload);
      state.homeInfo = payload;
    });
    buidler.addCase(fetchHomeData.rejected, (state, { payload, type }) => {
      console.log("rejected");
    });
  },
});

// 接受一个动作类型字符串和一个返回承诺的函数，并生成一个pending/fulfilled/rejected基于该承诺分派动作类型的thunk。简单理解就是专门用来创建异步 Action。
// 异步的action -> axios
export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  async (payload, { dispatch, getState }) => {
    const res = await axios.get("/api/home/info", {
      params: payload,
    });
    return res.data;
  }
);

// 同步的 action
export const { increment } = homeSlcie.actions;
// home 切片生成的 reducer
export default homeSlcie.reducer;
