import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Contact from "../components/Contact";
import { Grid, Row, Col } from 'react-bootstrap';

const ContactsPage = React.createClass({
    render(){
        return (
            <div>
                <div className="contacts-page" >
                    <Grid>
                        <Row className="show-grid ">
                            <div>
                                <Contact title="Agent" name="Jane Doe" email="jdoe@gmail.com"/>
                                <Contact title="Publicity" name="Jane Doe" email="jdoe@gmail.com"/>
                                <Contact title="Author" name="Jane Doe" email="jdoe@gmail.com"/>
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

export default ContactsPage;