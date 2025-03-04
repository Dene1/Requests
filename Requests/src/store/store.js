import {appReducer} from "../reducer/reducer.js";
import {applyMiddleware, legacy_createStore as createStore} from "redux"
import {thunk} from "redux-thunk";

export const store = createStore(appReducer, applyMiddleware(thunk));
