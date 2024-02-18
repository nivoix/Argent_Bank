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
  },
});

export const { addToken, addEmail, addFirstName, addLastName } =
  userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
