import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface StateType {
  data: boolean; // Array of any data type
  loading: boolean;
  error: string | undefined; // Either null or a string error message
}

const initialState: StateType = {
  data: false,
  loading: false,
  error: "",
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    // const response = await addEarnings(payload);

    // const data = await response;

    return true;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = true;
      state.data = false;
      state.error = action.error.message;
    });
  },
  reducers: {
    setDataStarted: (state) => {
      state.loading = true;
      state.error = "null";
    },
    setDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setDataSuccess } = authSlice.actions;
export default authSlice.reducer;
