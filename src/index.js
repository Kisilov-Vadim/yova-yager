import React from 'react';
import {render} from 'react-dom';
import {App} from './App/index';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

render(
   <Router history={history}>
      <Provider store={store}>
          <App />
      </Provider>
  </Router>
  , document.getElementById("root")
);
