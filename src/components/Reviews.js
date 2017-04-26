import React from 'react';
import Review from "../components/Review";
import { Grid, Row, Col } from 'react-bootstrap';

const Books = React.createClass({
    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <div className="reviews-grid">
                            {this.props.reviews.map((review, i) => <Review {...this.props} key={i} i={i} review={review} />)}                           
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default Books;