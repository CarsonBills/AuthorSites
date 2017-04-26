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
                                    <img src={this.props.about.authorImageURL}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <AboutDescription text={this.props.about.description} />
                                    <Subscribe {...this.props}/>
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