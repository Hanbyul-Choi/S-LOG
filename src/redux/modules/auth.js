import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../axios/auth";
import { setCookie } from "../../hooks/setCookie";

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: null,
  authError: null,

  isError: false,
  isLoading: false,
};

// dispatch 할 때 username이랑 password 받아서 extra리듀서에 전달
export const __login = createAsyncThunk("login", async (payload, thunkAPI) => {
  try {
    const response = await login(payload);
    setCookie("accessToken", response.data.token, 1);
    return thunkAPI.fulfillWithValue({ payload });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __register = createAsyncThunk("register", async (payload, thunkAPI) => {
  try {
    await register(payload);
    const response = await login(payload);
    setCookie("accessToken", response.data.token, 1);
    return thunkAPI.fulfillWithValue({ payload });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeForm: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
      auth: null,
    }),
    changeField: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: { ...state[form], [key]: value },
    }),
  },
  extraReducers: {
    // TODO: 리턴으로 객체를 넘겨주면 굳이 state에 접근하지 않아도 되지 않나...?  => "Yes" + 중괄호를 소괄호로 묶어서 리턴문 생략도 가능
    [__login.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.auth = null;
      state.authError = null;
    },
    [__login.fulfilled]: (state, { payload: auth }) => {
      state.auth = auth.payload;
      state.isLoading = false;
      state.token = auth.token;
    },
    [__login.rejected]: (state, { payload: error }) => {
      state.isLoading = false;
      state.isError = true;
      state.authError = error;
    },
    [__register.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.auth = null;
      state.authError = null;
    },
    [__register.fulfilled]: (state, { payload: auth }) => {
      state.auth = auth.payload;
      state.isLoading = false;
      state.token = auth.token;
    },
    [__register.rejected]: (state, { payload: error }) => {
      state.isLoading = false;
      state.isError = true;
      state.authError = error;
    },
  },
});

export const { initializeForm, changeField } = authSlice.actions;
export default authSlice.reducer;
