import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listPost } from "../../axios/posts";

const initialState = {
  posts: null,
  error: null,
  isLoading: false,
};

export const __listPosts = createAsyncThunk("listPosts", async (payload, thunkAPI) => {
  try {
    const response = await listPost(payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__listPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__listPosts.fulfilled]: (state, action) => ({
      ...state,
      posts: action.payload,
      isLoading: false,
    }),
    [__listPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
