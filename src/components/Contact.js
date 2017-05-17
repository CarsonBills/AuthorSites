import React from 'react';
import { Col } from 'react-bootstrap';

class Contact extends React.Component {
    render(){
        return (
            <Col xs={12} md={4} >
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