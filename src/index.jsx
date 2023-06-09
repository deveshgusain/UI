import React from "react";
import { createRoot } from "react-dom/client";

import store from "../src/store";
import { Provider } from "react-redux";

import Main from "../components/Main";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
