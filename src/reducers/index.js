import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import about from "./about";
import articles from "./articles";
import books from "./books";
import contact from "./contact";
import events from "./events";
import home from "./home";
import siteConfig from "./siteConfig";
import videos from "./videos";
import instagram from "./instagram";
import youtube from "./youtube";

const rootReducer = combineReducers({books, about, articles, contact, events, home, siteConfig, videos, instagram, youtube, routing: routerReducer});

export default rootReducer;