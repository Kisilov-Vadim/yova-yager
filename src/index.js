import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App/index';
// import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store/store';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
     <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider> 
    </Router>
    , document.getElementById("root")
);