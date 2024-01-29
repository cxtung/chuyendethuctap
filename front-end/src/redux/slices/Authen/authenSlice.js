import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "authen",
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    setIsSignedIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsSignedIn } = userSlice.actions;

export default userSlice.reducer;
