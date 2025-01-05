import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDashboardAnalytics } from "../../services/dashboard";
import { DashboardSummary } from "../../types/dashboard";

interface StateType {
  data: DashboardSummary | {};
  loading: boolean;
  error: string | undefined;
}

const initialState: StateType = {
  data: {},
  loading: true,
  error: "",
};

export const fetchDashboardAnalytics = createAsyncThunk(
  "data/fetchDashboardAnalytics",

  async () => {
    try {
      const response = await getDashboardAnalytics();

      const data = await response;

      return data;
    } catch (error) {
      throw error;
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardAnalytics.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDashboardAnalytics.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDashboardAnalytics.rejected, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    // fetchDashboardAnalyticsStarted: (state) => {
    //   state.loading = true;
    //   state.error = "null";
    // },
    // fetchDashboardAnalyticsSuccess: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // },
    // fetchDashboardAnalyticsFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
