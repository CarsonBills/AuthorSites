import React from 'react';
import Subscribe from '../components/Subscribe';
import SectionTitle from '../components/SectionTitle';
import TextTruncate from 'react-text-truncate'; 
import { Grid, Row, Col } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
 

class About extends React.Component {
    render(){
        return (
            <div className="about about-home">
                <Grid>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div className="about-image" >
                                    <img alt="Author" src={this.props.about[0].data.authorImageURL}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="about-home-text">
                                    <div className="section-title"> 
                                        <SectionTitle title={this.props.about[0].data.aboutPageText}/>
                                    </div>
                                    <TextTruncate 
                                        className="about-description"
                                        line={3}
                                        truncateText="…"
                                        text={ReactHtmlParser(entities.decode(this.props.about[0].data.description))}
                                        />
                                    <a className="read-more" href={this.props.about[0].data.link}>Read More</a>
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