import React from 'react';
import Contact from '../components/Contact';
import SectionTitle from '../components/SectionTitle';

const ContactContainer = React.createClass({
    render(){
        return (
            <div>
                <SectionTitle title="Contact"/>
                <Contact />
            </div>
        )
    }
});

export default ContactContainer;