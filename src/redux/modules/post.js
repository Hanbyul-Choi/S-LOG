import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readPost, updatePost, writePost } from "../../axios/posts";

const initialState = {
  title: "",
  body: "",
  tags: [],
  isLoading: false,
  post: null,
  originalPostId: null,
  isError: false,
  error: null,
};

export const __writePost = createAsyncThunk("writePost", async (payload, thunkAPI) => {
  try {
    writePost(payload);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __readPost = createAsyncThunk("readPost", async (payload, thunkAPI) => {
  try {
    const post = await readPost(payload);
    return thunkAPI.fulfillWithValue(post.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __updatePost = createAsyncThunk("updatePost", async (payload, thunkAPI) => {
  try {
    const response = await updatePost(payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    initializeInput: (state) => ({ ...state, title: "", body: "", tags: [] }),
    initializePost: (state) => ({ ...state, post: null }),
    changeField: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),
    setOriginPost: (state, { payload: post }) => ({
      ...state,
      title: post.post.title,
      body: post.post.body,
      tags: post.post.tags,
      originalPostId: post.id,
      post: null,
    }),
  },
  extraReducers: {
    [__writePost.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__writePost.fulfilled]: (state, action) => ({
      ...state,
      post: { ...action.payload },
      isLoading: false,
    }),
    [__writePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__readPost.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__readPost.fulfilled]: (state, { payload: post }) => ({
      ...state,
      post,
      originalPostId: null,
      isLoading: false,
    }),
    [__readPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__updatePost.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__updatePost.fulfilled]: (state, { payload: post }) => ({
      ...state,
      post: { ...state.post, ...post },
      isLoading: false,
      originalPostId: null,
    }),
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { initializeInput, initializePost, changeField, setOriginPost } = postSlice.actions;
export default postSlice.reducer;
