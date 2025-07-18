import { configureStore } from '@reduxjs/toolkit';

import uiReducer from './ui';
import cartReducer from './cart-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
