import React from 'react';
import ContactsPage from '../components/ContactsPage';
import SectionTitle from '../components/SectionTitle';
import { Grid, Row } from 'react-bootstrap';

class ContactPageContainer extends React.Component {

    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title={this.props.contact.pageTitle}/>
                </div>
                <div className="page-content">
                    <Grid>
                        <Row className="show-grid">
                            <div className="page-content">
                                <div className="contacts-page" >
                                    {this.props.contact.sections.map((contact, i) => <ContactsPage {...this.props.contact} key={i} i={i} contact={contact} />)}
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