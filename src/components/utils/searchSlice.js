import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addCacheSearch: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { addCacheSearch } = searchSlice.actions;
export default searchSlice.reducer;
