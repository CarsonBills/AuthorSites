import React from 'react';
import BookCover from '../components/Book';
import { Grid, Row } from 'react-bootstrap';

const Books = React.createClass({
    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <div className="book-list">
                            <BookCover title="From Here to Eternity" link="/books/from-here-to-eternity"/>
                            <BookCover title="Smoke Gets In Your Eyes" link="/books/smoke-gets-in-your-eyes"/>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default Books;