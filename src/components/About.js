import React from 'react';
import AboutDescription from '../components/AboutDescription'; 
import Subscribe from '../components/Subscribe';
import { Grid, Row, Col } from 'react-bootstrap';

const About = React.createClass({
    render(){
        return (
            <div className="about about-page">
                <Grid>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div >
                                    <img src="http://placehold.it/480x480"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <AboutDescription />
                                    <Subscribe title="Sign Up for Newsletter"/>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default About;