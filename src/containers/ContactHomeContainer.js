import React from 'react';
import ContactsHome from '../components/ContactsHome';
import SectionTitle from '../components/SectionTitle';
import config from "../config";
import store from '../store';

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