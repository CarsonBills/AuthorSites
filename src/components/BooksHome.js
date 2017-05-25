import React from 'react';
import BookCover from '../components/Book';
import SectionTitle from '../components/SectionTitle';
import Button from "../components/Button";
import TextTruncate from 'react-text-truncate'; 
import { decodeForDisplay } from '../helpers/functions';
import { Grid, Row, Col } from 'react-bootstrap';

class BooksHome extends React.Component {
    render(){
        let testBook
        for (var x = 0; x < this.props.booksData[0].data.books.length; x++){
            if (this.props.booksData[0].data.books[x]._doc === this.props.id){
                testBook = this.props.booksData[0].data.books[x]
            } 
        }
        let link = "/books/"+testBook.url;
        return (
            <Grid>
                <Row className="show-grid">
                    <div>
                        <Col xs={12} md={6}>
                            <div className="books-home-text">
                                <div className="section-title"> 
                                    <SectionTitle title={testBook.bookTitle} subtitle={testBook.subtitle}/>
                                </div>
                                <TextTruncate 
                                    className="detail-description"
                                    line={3}
                                    truncateText="…"
                                    text={decodeForDisplay(testBook.summary)}
                                    />
                                <a className="read-more" href={link}>Read More</a>
                                <Button dropDownLinks={testBook.retailersLinks} text={testBook.orderButtonText} link="#" type="buy"/>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="books-home-cover">
                                <BookCover book={testBook} link={link}/>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Grid>
        )
    }
}

export default BooksHome;