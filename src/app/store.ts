import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'; 
import dashboardReducer from '../features/dashboardSlice'; 
export const store = configureStore({
  reducer: {
   authReducer, 
   dashboardReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
