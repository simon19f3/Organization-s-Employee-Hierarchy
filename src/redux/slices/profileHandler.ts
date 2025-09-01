import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state with explicit type
const initialState: string = "CEO";

const profilesSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileName: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { profileName } = profilesSlice.actions;
export default profilesSlice.reducer;