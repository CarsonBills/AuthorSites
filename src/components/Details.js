import React from 'react';
import BookCover from '../components/Book';
import Button from "../components/Button";
import DetailDescription from "../components/DetailDescription";
import Reviews from "../components/Reviews";
import SectionTitle from '../components/SectionTitle';
import { Grid, Row, Col } from 'react-bootstrap';

const Details = React.createClass({
    render(){
        const link = "/books/"+this.props.book.url;
        return (
            <div className="book-detail">
                <div className="detail-data">
                    <Grid>
                        <Row className="show-grid ">
                            <div>
                                <BookCover dropDownLinks={this.props.book.retailersLinks} buttonText={this.props.book.orderButtonText} link={link} />
                                <Col xs={12} md={6}>
                                    <div className="detail-title-description">
                                        <div className="section-title"> 
                                            <SectionTitle title={this.props.book.bookTitle} subtitle={this.props.book.subtitle}/>
                                        </div>
                                        <DetailDescription description={this.props.book.summary}/>
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
                                <SectionTitle title={this.props.book.reviewSection.sectionTitle}/>
                            </div>
                                <Reviews reviews={this.props.book.reviewSection.reviews} />
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

export default Details;                




