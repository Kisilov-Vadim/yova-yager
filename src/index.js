import React from 'react';
import {render} from 'react-dom';
import {App} from './App/index';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter  } from "react-router-dom";

render(
   <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter >
  , document.getElementById("root")
);
