import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../../services/profile";
import { UserProfile } from "../../types/profile";

interface StateType {
  data: UserProfile | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: StateType = {
  data: null,
  loading: true,
  error: "",
};

export const fetchUserProfile = createAsyncThunk(
  "data/fetchUserProfile",

  async (id: string) => {
    try {
      const response = await getUserProfile(id);

      const data = await response;

      return data;
    } catch (error) {
      throw error;
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = "";
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = true;
      state.data = null;
      state.error = action.error.message;
    });
  },
  reducers: {
    // fetchUserProfileStarted: (state) => {
    //   state.loading = true;
    //   state.error = "null";
    // },
    // fetchUserProfileSuccess: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // },
    // fetchUserProfileFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = profileSlice.actions;
export default profileSlice.reducer;
