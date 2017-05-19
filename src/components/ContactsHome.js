import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactsPage from "../components/ContactsPage";
import Subscribe from "../components/Subscribe";
import Subtitle from "../components/Subtitle";
import Instagram from "../components/Instagram";
import { Grid, Row, Col } from 'react-bootstrap';

class Contacts extends React.Component {
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
                                <Instagram {...this.props} />
                            </div>
                        </Row>
                    </Grid>
                </div>
                <div className="contacts-list bg-grey" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                {this.props.contact.length ? <SectionTitle title={this.props.contact[0].data.pageTitle} /> : null }
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            {this.props.contact.length ? this.props.contact[0].data.sections.map((contact, i) => <ContactsPage {...this.props.contact} key={i} i={i} contact={contact} />) : null }
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