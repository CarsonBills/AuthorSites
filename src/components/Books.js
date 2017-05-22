import React from 'react';
import BookCover from '../components/Book';
import { Grid, Row } from 'react-bootstrap';

class Books extends React.Component {
    render(){
        const link = "/books/"+this.props.book.url;
        return (
            <div className="book-list">
                <BookCover book={this.props.book} title={this.props.book.bookTitle} link= {link}/>
            </div>
        )
    }
}

export default Books;