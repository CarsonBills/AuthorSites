import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

const Event = React.createClass({
    render(){
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                    <div className="event" >
                        <Col xs={12} md={3} ><span><i className="fa fa-calendar" aria-hidden="true"></i>{this.props.date}</span></Col>
                        <Col xs={12} md={3} ><span>{this.props.location}</span></Col>
                        <Col xs={12} md={3} ><span>{this.props.eventType}</span></Col>
                        <Col xs={12} md={3} ><span className='details'>Details/Tickets</span></Col>
                    </div>
                </Row>
            </Grid>
            </div>
        )
    }
});

export default Event;