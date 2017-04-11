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
                                <BookCover buttonText="Buy Now" link="/from_here_to_eternity" />
                                <Col xs={12} md={6}>
                                    <div className="detail-title-description">
                                        <div className="section-title"> 
                                            <SectionTitle title="From Here to Eternity" subtitle="Traveling the World to Find the Good Death"/>
                                        </div>
                                        <DetailDescription />
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
                                <Reviews />
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

export default Details;                




