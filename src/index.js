import React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import "./index.css";
import Root from "./Root";
import configureStore from "./store";

const store = configureStore();
const history = browserHistory;

render(
  <React.StrictMode>
    <Root store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
