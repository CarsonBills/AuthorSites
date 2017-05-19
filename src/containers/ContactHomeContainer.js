import React from 'react';
import ContactsHome from '../components/ContactsHome';
import SectionTitle from '../components/SectionTitle';
import config from "../config";
import store from '../store';

class ContactContainer extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchContactData(config.author));
    }
    render(){
        return (
            <div>
                <div className="page-content">
                    {this.props.contact.length && this.props.home.length ? <ContactsHome {...this.props}/> : null}
                </div>
            </div>
        )
    }
}

export default ContactContainer;