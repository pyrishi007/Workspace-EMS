import { createSlice } from "@reduxjs/toolkit";


const useSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      action.payload && (state.user = action.payload);
    },
  },
});

export const { addUser } = useSlice.actions;
export default useSlice.reducer;
