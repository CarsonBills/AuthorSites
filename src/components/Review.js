import React from 'react';
import { Col } from 'react-bootstrap';

const Review = React.createClass({

    render(){
        return (
            <Col xs={12} md={6}>
                <div className="review">
                    <p className="review-text">{this.props.text}</p>
                    <p className="review-author">{this.props.reviewer}</p>
                    <p className="review-publication">{this.props.publication}</p>
                </div>
            </Col>
        )
    }
});

export default Review;