import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import books from "./books";

const rootReducer = combineReducers({books, routing: routerReducer});

export default rootReducer;