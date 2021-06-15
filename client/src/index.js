import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoProvider from "./components/context/todoContext";
import initState from "./redux/initialsState";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import todoSagaWatcher from "./redux/sagas/todoSagas";
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware,thunk))
);

sagaMiddleware.run(todoSagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
