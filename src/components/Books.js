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
                            <BookCover title="From Here to Eternity" link="/from_here_to_eternity"/>
                            <BookCover title="Smoke Gets In Your Eyes" link="/smoke_gets_in_your_eyes"/>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default Books;