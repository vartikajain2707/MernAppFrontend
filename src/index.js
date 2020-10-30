import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./Context/StateProvider";
import reducer, { initialState } from "./Context/Reducer";
import { AuthProvider } from './Context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);