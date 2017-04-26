import React from 'react';
import BookCover from '../components/Book';
import { Grid, Row } from 'react-bootstrap';

const Books = React.createClass({
    render(){
        const link = "/books/"+this.props.book.url;
        return (
            <div className="book-list">
                <BookCover title={this.props.book.bookTitle} link= {link}/>
            </div>
        )
    }
});

export default Books;