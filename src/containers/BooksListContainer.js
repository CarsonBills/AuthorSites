import React from 'react';
import Books from '../components/Books';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row } from 'react-bootstrap';
import config from "../config";
import store from '../store';

class BooksListContainer extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchBookDetails(config.author));
        store.dispatch(this.props.fetchBooksPageData(config.author));
    }
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    {this.props.books.length ? <SectionTitle title={this.props.books[0].data.pageTitle}/> : null }
                </div>
                <Grid>
                    <div className="page-content">
                        {this.props.booksData.length ? this.props.booksData[0].data.books.map((book, i) => <Books {...this.props} key={i} i={i} book={book} />) : null}
                    </div>
                </Grid>
            </div>
        )
    }
}

export default BooksListContainer;