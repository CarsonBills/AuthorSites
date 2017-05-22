import React from 'react';
import BookCover from '../components/Book';
import Button from "../components/Button";
import DetailDescription from "../components/DetailDescription";
import Reviews from "../components/Reviews";
import SectionTitle from '../components/SectionTitle';
import { Grid, Row, Col } from 'react-bootstrap';

class Details extends React.Component {
    render(){
        const i = this.props.booksData[0].data.books.findIndex((book) => book.url === this.props.params.id);
        const book = this.props.booksData[0].data.books[i];
        const link = "/books/"+book.url;
        return (
            <div className="book-detail">
                <div className="detail-data">
                    <Grid>
                        <Row className="show-grid ">
                            <div>
                                <BookCover book={book} dropDownLinks={book.retailersLinks} buttonText={book.orderButtonText} link={link} />
                                <Col xs={12} md={6}>
                                    <div className="detail-title-description">
                                        <div className="section-title"> 
                                            <SectionTitle title={book.bookTitle} subtitle={book.subtitle}/>
                                        </div>
                                        <DetailDescription description={book.summary}/>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                </div>
                <div className="detail-reviews">
                    <Grid>
                        <Row className="show-grid">
                            <div className="section-title"> 
                                <SectionTitle title={book.reviews.sectionTitle}/>
                            </div>
                                <Reviews reviews={book.reviews.reviews} />
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Details;                




