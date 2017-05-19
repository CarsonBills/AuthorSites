import React from 'react';
import BookCover from '../components/Book';
import SectionTitle from '../components/SectionTitle';
import Button from "../components/Button";
import TextTruncate from 'react-text-truncate'; 
import { Grid, Row, Col } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class BooksHome extends React.Component {
    render(){
        let link = "/books/"+this.props.book.url;
        return (
            <Grid>
                <Row className="show-grid">
                    <div>
                        <Col xs={12} md={6}>
                            <div className="books-home-text">
                                <div className="section-title"> 
                                    <SectionTitle title={this.props.book.bookTitle} subtitle={this.props.book.subtitle}/>
                                </div>
                                <TextTruncate 
                                    className="detail-description"
                                    line={3}
                                    truncateText="…"
                                    text={ReactHtmlParser(entities.decode(this.props.book.summary))}
                                    textTruncateChild={<a href={link}>Read more</a>}
                                    />
                                <Button dropDownLinks={this.props.book.retailersLinks} text={this.props.book.orderButtonText} link="#" type="buy"/>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="books-home-cover">
                                <BookCover link={link}/>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Grid>
        )
    }
}

export default BooksHome;