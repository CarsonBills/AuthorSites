import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";
import Subtitle from "../components/Subtitle";
import { Grid, Row, Col } from 'react-bootstrap';

const Contacts = React.createClass({
    render(){
        return (
            <div>
                <div className="photos-list" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title="Photos" />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Subtitle icon='<i class="fa fa-instagram"></i>'subtitle="Follow Caitlin Doughty on Instagram" />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div className="photos">
                                <img src="http://placehold.it/370x370"/>
                                <img src="http://placehold.it/370x370"/>
                                <img src="http://placehold.it/370x370"/>
                            </div>
                        </Row>
                    </Grid>
                </div>
                <div className="contacts-list bg-grey" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title="Contact" />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Contact title="Agent" name="Jane Doe" email="jdoe@gmail.com"/>
                                <Contact title="Publicity" name="Jane Doe" email="jdoe@gmail.com"/>
                                <Contact title="Author" name="Jane Doe" email="jdoe@gmail.com"/>
                            </div>
                        </Row>
                    </Grid>
                </div>
                <div className="subscribe-home" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title="Subscribe" />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Subtitle subtitle="You'll recieve occasional updates on books, articles, and tour dates" />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div>
                                <Subscribe />
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

export default Contacts;