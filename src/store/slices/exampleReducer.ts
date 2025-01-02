import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface StateType {
  data: any[]; // Array of any data type
  loading: boolean;
  error: string | undefined; // Either null or a string error message
}

const initialState: StateType = {
  data: [],
  loading: false,
  error: "",
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    // const response = await addEarnings(payload);

    // const data = await response;

    return [];
  } catch (error) {
    throw error;
  }
});

const exampleSlice = createSlice({
  name: "example",
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
      state.data = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    //   fetchDataStarted: (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   },
    //   fetchDataSuccess: (state, action) => {
    //     state.loading = false;
    //     state.data = action.payload;
    //   },
    //   fetchDataFailure: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
  },
});

export const {} = exampleSlice.actions;
export default exampleSlice.reducer;
