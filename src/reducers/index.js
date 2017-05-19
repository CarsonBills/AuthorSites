import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import about from "./about";
import articles from "./articles";
import books from "./books";
import booksData from "./booksData";
import contact from "./contact";
import events from "./events";
import home from "./home";
import siteConfig from "./siteConfig";
import videos from "./videos";
import instagram from "./instagram";
import youtube from "./youtube";
import youtubeUserId from "./youtubeUserId";
import instagramUserId from "./instagramUserId";

const rootReducer = combineReducers({books, booksData, about, articles, contact, events, home, siteConfig, videos, instagram, youtube, youtubeUserId, instagramUserId, routing: routerReducer});

export default rootReducer;