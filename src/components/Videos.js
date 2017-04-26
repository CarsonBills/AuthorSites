import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Youtube from "../components/Youtube";
import { Grid, Row, Col } from 'react-bootstrap';

const Videos = React.createClass({
    componentDidMount() {
        this.props.fetchYoutube();  
    },
    render(){
        let number;
        if (this.props.numberOfVideos){
            number = this.props.numberOfVideos
        } else {
            number = "12"
        }
        return (
            <div>
                <div className="video-list" >
                    <Grid>
                        <Row className="show-grid ">
                            <div className="videos-list">
                                {this.props.youtube ? <Youtube {...this.props} numberOfVideos={number} /> : null }
                            </div>
                        </Row>
                    </Grid>
                </div>
                    <Button link="/videos" text="See All Videos" type="see-all"/>
            </div>
        )
    }
});

export default Videos;