import React from 'react';
import Details from '../components/Details';
import config from "../config";
import store from '../store';
import ScrollToTop from './ScrollToTop';


class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        store.dispatch(this.props.fetchBookDetails(config.author));
    }
    render() {
        return (

            <div>
                <div className="page-content">
                    {this.props.booksData.length ? <Details {...this.props} /> : null}
                </div>
            </div>

        )
    }

    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    
    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
    }
}

export default DetailContainer;