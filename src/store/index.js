// 组合redux 子模块 + 导出store实例

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import channelReducer from "./modules/channels";

export default configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});
