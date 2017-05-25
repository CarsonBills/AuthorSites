import React from 'react';
import Contact from "../components/Contact";

class ContactsPage extends React.Component {
    render(){
        return (
            <div>
                <Contact numberOfContacts={this.props.numberOfContacts} title={this.props.contact.contactTitle} name={this.props.contact.contactName} email={this.props.contact.contactEmail}/>
            </div>
        )
    }
}

export default ContactsPage;