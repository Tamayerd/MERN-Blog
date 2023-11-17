import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";

const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;
const initalState ={
  user: {userInfo: userInfoFromStorage}
}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initalState
});

export default store;
