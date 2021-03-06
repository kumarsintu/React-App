import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {Provider} from "react-redux";
import store from "./store/index";


ReactDOM.render(<BrowserRouter><Provider store={store}>
                      <App />
                </Provider></BrowserRouter>
                ,document.getElementById('root'));
