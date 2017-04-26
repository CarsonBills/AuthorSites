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
                                    <img src={this.props.about.authorImageURL}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <div className="section-title"> 
                                        <SectionTitle title={this.props.about.pageTitle}/>
                                    </div>
                                    <TextTruncate 
                                        className="about-description"
                                        line={3}
                                        truncateText="…"
                                        text= {this.props.about.description}
                                        textTruncateChild={<a href={this.props.about.link}>Read more</a>}
                                    />
                                    <Subscribe title="true" {...this.props}/>
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