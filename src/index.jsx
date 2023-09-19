import React from "react";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import ShoppingList from "./components/ShoppingList.jsx";
import shoppingListReducer from "./store/shoppingListSlice.js";

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
});

Modal.setAppElement("#root");

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ShoppingList />
  </Provider>
);
