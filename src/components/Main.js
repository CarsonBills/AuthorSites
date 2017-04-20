import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

const Main = React.createClass({
    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid ">
                        <div className="top-bar">
                            <Col xs={12} md={9}>
                                <div className="nav">
                                    <ul>
                                        <li style={{'display':'inline-block'}}><Link to='/'><span className="home"><span className="red">Caitlyn</span> Doughty</span></Link></li>
                                        <li style={{'display':'inline-block'}}><Link to='/about'>About</Link></li>
                                        <li style={{'display':'inline-block'}}><Link to="/books">Books</Link></li>
                                        <li style={{'display':'inline-block'}}><Link to="/events">Events</Link></li>
                                        <li style={{'display':'inline-block'}}><Link to="/videos">Videos</Link></li>
                                        <li style={{'display':'inline-block'}}><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className="social">
                                    <p>Follow Caitlyn Doughty</p>
                                    <ul>
                                        <li><Link target="_blank" to="https://www.youtube.com/"><i className="fa fa-youtube-play" ></i></Link></li>
                                        <li><Link target="_blank" to="https://www.instagram.com/"><i className="fa fa-instagram" ></i></Link></li>
                                        <li><Link target="_blank" to="https://www.twitter.com/"><i className="fa fa-twitter" ></i></Link></li>
                                        <li><Link target="_blank" to="https://www.facebook.com/"><i className="fa fa-facebook-official" ></i></Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;