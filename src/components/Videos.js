import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Video from "../components/Video";
import { Grid, Row, Col } from 'react-bootstrap';

const Videos = React.createClass({
    render(){
        return (
            <div>
                <div className="video-list" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="page-title">
                                <SectionTitle title="Videos" />
                            </div>
                        </Row>
                        <Row className="show-grid ">
                            <div className="videos-list">
                                <Video title="text text text text text text text text"/>
                                <Video title="text text text text text text text text" />
                                <Video title="text text text text text text text text" />
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

export default Videos;