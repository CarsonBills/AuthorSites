import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Event extends React.Component {
    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <div className="event" >
                            <Col xs={12} md={3} ><span><i className="fa fa-calendar" aria-hidden="true"></i>{this.props.event.eventDate}</span></Col>
                            <Col xs={12} md={3} ><span>{this.props.event.city}</span></Col>
                            <Col xs={12} md={3} ><span>{this.props.event.location}</span></Col>
                            <Col xs={12} md={3} >
                                <span className='details'>
                                    {this.props.event.detailsLink ? <a href={this.props.event.detailsLink}>{this.props.event.detailsLabel}</a> : <p>{this.props.event.detailsLabel}</p> }
                                </span>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Event;