import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: [],
  reducers: {
    addChatItem: (state, action) => {
      state.splice(200, 1);
      state.unshift(action.payload);
    },
  },
});
export const { addChatItem } = liveChatSlice.actions;
export default liveChatSlice.reducer;
