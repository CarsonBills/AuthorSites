import React from 'react';
import ContactsPage from '../components/ContactsPage';
import SectionTitle from '../components/SectionTitle';

const ContactPageContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title="Contact"/>
                </div>
                <div className="page-content">
                    <ContactsPage />
                </div>
            </div>
        )
    }
});

export default ContactPageContainer;