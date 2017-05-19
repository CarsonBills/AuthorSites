import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state){
    return {
        books: state.books,
        booksData: state.booksData,
        articles: state.articles,
        about: state.about,
        contact: state.contact,
        events: state.events,
        home: state.home,
        siteConfig: state.siteConfig,
        videos: state.videos,
        youtube: state.youtube,
        instagram: state.instagram,
        youtubeUserId: state.youtubeUserId,
        instagramUserId: state.instagramUserId
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;