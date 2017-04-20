import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';

import Main from "./Main";

function mapStateToProps(state){
    return {
        books: state.books
    }
}



const App = connect(mapStateToProps)(Main);

export default App;