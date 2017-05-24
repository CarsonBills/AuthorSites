import React from 'react';
import { Col } from 'react-bootstrap';

class Contact extends React.Component {
    render(){
        var number = 12/this.props.numberOfContacts
        if (number < 4) {
            number = 4
        }
        return (
            <Col xs={12} md={number} >
                <div className="contact">
                    <h3 className="title">{this.props.title}</h3>
                    <p className="name">{this.props.name}</p>
                    <p className="email">{this.props.email}</p>
                </div>
            </Col>
        )
    }
}

export default Contact;