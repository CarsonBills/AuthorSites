import React from 'react';
import { Col } from 'react-bootstrap';

class Review extends React.Component{

    render(){
        let review;
        //This code makes the last review in a set of odd numbered reviews will take up a full width
        if (this.props.reviews.length%2 === 1 && this.props.reviews.length-1 !== this.props.i) {
            review = 
            <Col xs={12} md={6}>
                <div className="review">
                    <p className="review-text">{this.props.review.text}</p>
                    <p className="review-author">{this.props.review.reviewBy}</p>
                    <p className="review-publication">{this.props.review.publication}</p>
                </div>
            </Col>;
        } else {
            review = <Col xs={12} md={12}>
                <div className="review">
                    <p className="review-text">{this.props.review.text}</p>
                    <p className="review-author">{this.props.review.reviewBy}</p>
                    <p className="review-publication">{this.props.review.publication}</p>
                </div>
            </Col>
        }
        return (
            <div>
                { review }
            </div>
        )
    }
}

export default Review;