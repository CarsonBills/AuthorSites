import React from 'react';
import Books from '../components/Books';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row } from 'react-bootstrap';

const BooksListContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title="Books"/>
                </div>
                <Grid>
                    <Row className="show-grid">
                        <div className="page-content">
                            {this.props.books.map((book, i) => <Books {...this.props} key={i} i={i} book={book} />)}
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default BooksListContainer;