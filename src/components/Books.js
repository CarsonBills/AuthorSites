import React from 'react';
import BookCover from '../components/Book';
import { Grid, Row } from 'react-bootstrap';

const Books = React.createClass({
    render(){
        return (
            <div className="book-list">
                <BookCover title={this.props.book.bookTitle} link= {this.props.book.url}/>
            </div>
        )
    }
});

export default Books;