import { createSlice, PayloadAction } from "@reduxjs/toolkit";




  interface DashboardState {
    metrics: string[];
  }

const initialState:DashboardState = {
    metrics: ["Revenue",'Spend'],
};

 const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    metricsReducer: (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.metrics = payload
  }}
});

export const {metricsReducer } = dashboardSlice.actions;
export default dashboardSlice.reducer;
