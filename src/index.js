import React from 'react';
import {hydrate} from 'react-dom';
import {App} from './App/index';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

hydrate(
   <Router history={history}>
      <Provider store={store}>
          <App />
      </Provider>
  </Router>
  , document.getElementById("root")
);
