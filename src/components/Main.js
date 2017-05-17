import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Mask from "../components/Mask";
import Panel from "../components/Panel";
import Footer from "../components/Footer";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panelActive: false
        }
        this.barsClick = this.barsClick.bind(this);
        this.maskClick = this.maskClick.bind(this);
    }
    barsClick(){
        this.setState({panelActive: true})
    }
    maskClick(){
        this.setState({panelActive: false})
    }
    render(){
        console.log("Main", this.props)
        return (
            <div>
                <div>
                    <Grid>
                        <Row className="show-grid ">
                            <div className="top-bar">
                                <Col xs={12} sm={12} lg={9} md={9}>
                                    <div className="nav">
                                        <ul>
                                            <li><Link to='/'><span className="home"><span className="first">{this.props.siteConfig.authorFirstName}</span> <span className="second">{this.props.siteConfig.authorLastName}</span></span></Link></li>
                                            {this.props.siteConfig.header.map((link, i) => <li key={i}><Link to={link.title}>{link.title}</Link></li>)}
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} lg={2} md={3}  lgOffset={1} mdOffset={0} >
                                    <div className="social">
                                        <p>{this.props.siteConfig.social.socialLinksTitle}</p>
                                        <ul>
                                            {this.props.siteConfig.social.socialMediaLinks.map((link, i) => <li key={i}><Link target="_blank" to={link.url}><i className={link.type} ></i></Link></li>)}
                                        </ul>
                                    </div>
                                </Col>
                            </div>
                            <div className="mobile-nav">
                                <Col xs={12} sm={12} lg={8} md={9}>
                                    <div className="nav">
                                        <i className="fa fa-bars" aria-hidden="true" onClick={this.barsClick}></i>
                                        <Link to='/'><span className="home"><span className="first">{this.props.siteConfig.authorFirstName}</span> <span className="second">{this.props.siteConfig.authorLastName}</span></span></Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm={3} lg={3} md={3}  lgOffset={1} mdOffset={0} sm={12}>
                                    <div className="social">
                                        <p>{this.props.siteConfig.social.socialLinksTitle}</p>
                                        <ul>
                                            {this.props.siteConfig.social.socialMediaLinks.map((link, i) => <li key={i}><Link target="_blank" to={link.url}><i className={link.icon} ></i></Link></li>)}
                                        </ul>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                    <Panel isActive={this.state.panelActive} ref={(panel) => {this._panel = panel;}} {...this.props}/>
                    <Mask isActive={this.state.panelActive} maskClick={this.maskClick}/>
                    {React.cloneElement(this.props.children, this.props)}
                    <div className="push"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;