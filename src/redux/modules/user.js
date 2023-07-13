import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { check } from "../../axios/auth";
import { deleteCookie, getCookie } from "../../hooks/setCookie";

const initialState = {
  user: null,
  checkError: null,
  isLoading: false,
  logout: null,
};

export const __check = createAsyncThunk("check", async (payload, thunkAPI) => {
  try {
    const token = getCookie("accessToken");
    if (token === "") {
      localStorage.removeItem("user");
      return;
    }
    await check(token);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const __logout = createAsyncThunk("logout", async (payload, thunkAPI) => {
  try {
    localStorage.removeItem("user");
    deleteCookie("accessToken");
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tempSetUser: (state, { payload: user }) => ({
      ...state,
      user,
    }),
  },
  extraReducers: {
    [__check.pending]: (state) => ({
      ...state,
      isLoading: true,
      checkError: null,
    }),
    [__check.fulfilled]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
      isLoading: false,
    }),
    [__check.rejected]: (state, { payload: checkError }) => ({
      ...state,
      user: null,
      checkError,
      isLoading: false,
    }),
    [__logout.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [__logout.fulfilled]: (state) => ({
      ...state,
      user: null,
      isLoading: false,
      logout: true,
    }),
    [__logout.rejected]: (state, error) => ({
      ...state,
      checkError: error,
      isLoading: false,
    }),
  },
});

export const { tempSetUser } = userSlice.actions;
export default userSlice.reducer;
