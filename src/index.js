/**
 * Created by Administrator on 2017/12/4/004.
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Route from './config/Route';
import './css/style.css';


var loggerMiddleware = createLogger();

//创建携带所传入中间件的store
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

var store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store = { store }>
        {Route}
    </Provider>,
    document.getElementById("root")
);

// if (module.hot) {
//     module.hot.accept()
// }