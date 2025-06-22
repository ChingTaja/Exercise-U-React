import { createSlice } from '@reduxjs/toolkit';

const initialAuthNState = {
  isAuthenticated: false,
};

const authNSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthNState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authNActions = authNSlice.actions;
export default authNSlice.reducer;
