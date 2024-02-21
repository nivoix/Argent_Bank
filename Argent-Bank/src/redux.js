import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    addLastName: (state, action) => {
      state.lastName = action.payload;
    },
    clearStore: () => {
      return { token: null, email: null, firstName: null, lastName: null };
    },
  },
});

export const { addToken, addEmail, addFirstName, addLastName, clearStore } =
  userSlice.actions;

const apiSlice = createSlice({
  name: "api",
  initialState: {
    messageError: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messageError = action.payload;
    },
    clearMessage: () => {
      return { messageError: null };
    },
  },
});

export const { addMessage, clearMessage } = apiSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    api: apiSlice.reducer,
  },
});
