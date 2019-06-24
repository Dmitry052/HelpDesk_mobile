import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Chat from "./src/containers/chat";
import reducers from "./src/reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const Wraper = () => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default Wraper;