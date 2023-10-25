import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice";
import shamReducer from "../features/shams/shamSlice";
export const store = configureStore({
  reducer: {
      auth: authReducer,
      shams: shamReducer,
  },
});
