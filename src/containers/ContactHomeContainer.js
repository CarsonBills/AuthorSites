import React from 'react';
import ContactsHome from '../components/ContactsHome';
import SectionTitle from '../components/SectionTitle';

class ContactContainer extends React.Component {
    render(){
        return (
            <div>
                <div className="page-content">
                    <ContactsHome {...this.props}/>
                </div>
            </div>
        )
    }
}

export default ContactContainer;