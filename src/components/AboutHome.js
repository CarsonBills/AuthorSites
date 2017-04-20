import React from 'react';
import TextTruncate from 'react-text-truncate'; 
import Subscribe from '../components/Subscribe';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row, Col } from 'react-bootstrap';

const About = React.createClass({
    render(){
        return (
            <div className="about about-home">
                <Grid>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div>
                                    <img src="http://placehold.it/480x480"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <div className="section-title"> 
                                        <SectionTitle title="About Caitlin Doughty"/>
                                    </div>
                                    <TextTruncate 
                                        className="about-description"
                                        line={3}
                                        truncateText="…"
                                        text=" Mortician Caitlin Doughty--host and creator of Ask
                                            a Mortician and the New York Times best-selling 
                                            author if Smoke Gets in Your Eyes - founded The 
                                            Order of the Good Death. She lives in Los Angeles. 
                                            where she runs her nonprofit funeral home. 
                                            Undertaking L.A."
                                        textTruncateChild={<a href="#">Read more</a>}
                                    />
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