import React from 'react';
import Contact from "../components/Contact";

const ContactsPage = React.createClass({
    render(){
        return (
            <div>
                <Contact title={this.props.contact.contactTitle} name={this.props.contact.contactName} email={this.props.contact.contactEmail}/>
            </div>
        )
    }
});

export default ContactsPage;