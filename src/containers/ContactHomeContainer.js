import React from 'react';
import ContactsHome from '../components/ContactsHome';
import SectionTitle from '../components/SectionTitle';

const ContactContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <ContactsHome {...this.props}/>
                </div>
            </div>
        )
    }
});

export default ContactContainer;