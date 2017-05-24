import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Col} from 'react-bootstrap';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class Review extends React.Component{

    render(){
        let review;
        //This code makes the last review in a set of odd numbered reviews will take up a full width
        if (this.props.reviews.length%2 === 1 && this.props.reviews.length-1 !== this.props.i) {
            review = 
            <Col xs={12} md={6}>
                <div className="review">
                    <p className="review-text">{ReactHtmlParser(entities.decode(this.props.review.text))}</p>
                    {this.props.review.reviewBy ? <p className="review-author">{ReactHtmlParser(entities.decode(this.props.review.reviewBy))}</p> : null}
                    {this.props.review.publication ? <p className="review-publication">{ReactHtmlParser(entities.decode(this.props.review.publication))}</p> : null }
                </div>
            </Col>;
        } else {
            review = <Col xs={12} md={12}>
                <div className="review">
                    <p className="review-text">{ReactHtmlParser(entities.decode(this.props.review.text))}</p>
                    {this.props.review.reviewBy ? <p className="review-author">{ReactHtmlParser(entities.decode(this.props.review.reviewBy))}</p> : null }
                    {this.props.review.publication ? <p className="review-publication">{ReactHtmlParser(entities.decode(this.props.review.publication))}</p> : null }
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