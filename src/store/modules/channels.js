// 和频道相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken } from "@/utils";
import { getChannelAPI } from "@/apis/article";

const channelStore = createSlice({
  name: "channel",
  // 数据状态
  initialState: {
    channels: [], 
  },
  // 同步修改方法
  reducers: {
    setChannels(state, action) {
      state.channels = action.payload;
    },
  },
});

// 解构出actionCreater
const { setChannels } = channelStore.actions;

// 异步方法，完成登录获取token
const fetchChannels = (loginForm) => {
  return async (dispatch) => {
    const res = await getChannelAPI();
    // console.log(res,'---res---')
    dispatch(setChannels(res.data));
  };
};

export { fetchChannels };

// 获取reducer函数
const channelReducer = channelStore.reducer;
export default channelReducer;
