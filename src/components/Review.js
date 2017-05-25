import React from 'react';
import {Col} from 'react-bootstrap';
import { decodeForDisplay } from '../helpers/functions';

class Review extends React.Component{

    render(){
        let review;
        //This code makes the last review in a set of odd numbered reviews will take up a full width
        if (this.props.reviews.length%2 === 1 && this.props.reviews.length-1 !== this.props.i) {
            review = 
            <Col xs={12} md={6}>
                <div className="review">
                    <p className="review-text">{decodeForDisplay(this.props.review.text)}</p>
                    {this.props.review.reviewBy ? <p className="review-author">{decodeForDisplay(this.props.review.reviewBy)}</p> : null}
                    {this.props.review.publication ? <p className="review-publication">{decodeForDisplay(this.props.review.publication)}</p> : null }
                </div>
            </Col>;
        } else {
            review = <Col xs={12} md={12}>
                <div className="review">
                    <p className="review-text">{decodeForDisplay(this.props.review.text)}</p>
                    {this.props.review.reviewBy ? <p className="review-author">{decodeForDisplay(this.props.review.reviewBy)}</p> : null }
                    {this.props.review.publication ? <p className="review-publication">{decodeForDisplay(this.props.review.publication)}</p> : null }
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