import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';

import Main from "./Main";

function mapStateToProps(state){
    console.log("State", state)
    return {
        books: state.books,
        articles: state.articles,
        about: state.about,
        contact: state.contact,
        events: state.events,
        home: state.home,
        siteConfig: state.siteConfig,
        videos: state.videos
    }
}



const App = connect(mapStateToProps)(Main);

export default App;