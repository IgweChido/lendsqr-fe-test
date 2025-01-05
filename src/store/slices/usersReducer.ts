import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUsers } from "../../services/users";
import { Users } from "../../types/users";

interface StateType {
  data: Users[];
  loading: boolean;
  error: string | undefined;
}

const initialState: StateType = {
  data: [],
  loading: true,
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "data/fetchUsers",

  async () => {
    try {
      const response = await getUsers();

      const data = await response;

      return data;
    } catch (error) {
      throw error;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    // fetchUsersStarted: (state) => {
    //   state.loading = true;
    //   state.error = "null";
    // },
    // fetchUsersSuccess: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // },
    // fetchUsersFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
