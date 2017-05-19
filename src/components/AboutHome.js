import React from 'react';
import TextTruncate from 'react-text-truncate'; 
import HTMLTruncate from "react-truncate-html"
import Subscribe from '../components/Subscribe';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row, Col } from 'react-bootstrap';


import LinesEllipsis from 'react-lines-ellipsis'
import ReactHtmlParser from 'react-html-parser';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
 

class About extends React.Component {
    render(){
        const text = ReactHtmlParser(entities.decode(this.props.about[0].data.description))
        console.log(text)
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
                                    <div className="about-description">
                                        <p>{ReactHtmlParser(entities.decode(this.props.about[0].data.description))}</p>
                                    </div>
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