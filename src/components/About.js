import React from 'react';
import AboutDescription from '../components/AboutDescription'; 
import Subscribe from '../components/Subscribe';
import { Grid, Row, Col } from 'react-bootstrap';

class About extends React.Component {
    render(){
        console.log("ABOUT", this.props)
        return (
            <div className="about about-page">
                <Grid>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div className="about-image" >
                                    {this.props.about ? <img src={this.props.about[0].data.authorImageURL}/> : null }
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    {this.props.about ? <AboutDescription text={this.props.about[0].data.description} /> : null }
                                    <Subscribe {...this.props}/>
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