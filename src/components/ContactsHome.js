import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactsPage from "../components/ContactsPage";
import Subscribe from "../components/Subscribe";
import Subtitle from "../components/Subtitle";
import Instagram from "../components/Instagram";
import { Grid, Row, Col } from 'react-bootstrap';

class Contacts extends React.Component {
    componentDidMount() {
        this.props.fetchInstagram();  
    }
    render(){
        return (
            <div>
                <div className="photos-list" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title={this.props.home.photos.photosTitle} />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Subtitle icon="fa fa-instagram" subtitle={this.props.home.photos.photosSubTitle} />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div className="photos">
                                {this.props.instagram ? <Instagram {...this.props} /> : null }
                            </div>
                        </Row>
                    </Grid>
                </div>
                <div className="contacts-list bg-grey" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title={this.props.contact.pageTitle} />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            {this.props.contact.sections.map((contact, i) => <ContactsPage {...this.props.contact} key={i} i={i} contact={contact} />)}
                        </Row>
                    </Grid>
                </div>
                <div className="subscribe-home" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title={this.props.home.newsletter.sectionTitle} />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Subtitle subtitle={this.props.home.newsletter.subtitle}/>
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Subscribe {...this.props}/>
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}


export default Contacts;