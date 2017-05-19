import React from 'react';
import TextTruncate from 'react-text-truncate'; 
import Subscribe from '../components/Subscribe';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row, Col } from 'react-bootstrap';

class About extends React.Component {
    render(){
        return (
            <div className="about about-home">
                <Grid>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div className="about-image" >
                                    <img src={this.props.about[0].data.authorImageURL}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <div className="section-title"> 
                                        <SectionTitle title={this.props.about[0].data.aboutPageText}/>
                                    </div>
                                    <TextTruncate 
                                        className="about-description"
                                        line={3}
                                        truncateText="…"
                                        text= {this.props.about[0].data.description}
                                        textTruncateChild={<a href={this.props.about[0].data.link}>Read more</a>}
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
}

export default About;