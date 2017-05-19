import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Youtube from "../components/Youtube";
import { Grid, Row, Col } from 'react-bootstrap';
import store from '../store';

class Videos extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        store.dispatch(this.props.fetchYoutubeUserID(this.props.videos[0].data.channelName)).then(() => {
            store.dispatch(this.props.fetchYoutube(this.props.youtubeUserId[0]));
        });
    }
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
                    {number === '6' ? <Button link="/videos" text="See All Videos" type="see-all"/> : null}
            </div>
        )
    }
}

export default Videos;