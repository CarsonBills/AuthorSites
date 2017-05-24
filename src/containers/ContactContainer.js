import React from 'react';
import ContactsPage from '../components/ContactsPage';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row } from 'react-bootstrap';
import store from "../store";
import config from "../config";

class ContactPageContainer extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchContactData(config.author));
    }
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    {this.props.contact.length ? <SectionTitle title={this.props.contact[0].data.pageTitle}/> : null }
                </div>
                <div className="page-content">
                    <Grid>
                        <Row className="show-grid">
                            <div className="page-content">
                                <div className="contacts-page">
                                    {this.props.contact.length ? this.props.contact[0].data.sections.map((contact, i) => {

                                        return <ContactsPage numberOfContacts={this.props.contact[0].data.sections.length} key={i} i={i} contact={contact} /> } ) : null}
                                    
                                </div>
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default ContactPageContainer;