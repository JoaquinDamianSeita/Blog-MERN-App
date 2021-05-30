import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { setPosts } from "./actions"

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

store.dispatch(setPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

