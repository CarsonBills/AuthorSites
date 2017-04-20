import React from 'react';
import BookCover from '../components/Book';
import Button from "../components/Button";
import DetailDescription from "../components/DetailDescription";
import Reviews from "../components/Reviews";
import SectionTitle from '../components/SectionTitle';
import { Grid, Row, Col } from 'react-bootstrap';

const Details = React.createClass({
    render(){
        return (
            <div className="book-detail">
                <div className="detail-data">
                    <Grid>
                        <Row className="show-grid ">
                            <div>
                                <BookCover buttonText="Buy Now" link="/from-here-to-eternity" />
                                <Col xs={12} md={6}>
                                    <div className="detail-title-description">
                                        <div className="section-title"> 
                                            <SectionTitle title={this.props.book.title} subtitle={this.props.book.subtitle}/>
                                        </div>
                                        <DetailDescription description={this.props.book.description}/>
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
                                <SectionTitle title="Endorsements & Reviews"/>
                            </div>
                                
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

export default Details;                




