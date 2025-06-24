import { createSlice } from '@reduxjs/toolkit';

const initialUi = {
  showCart: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUi,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
