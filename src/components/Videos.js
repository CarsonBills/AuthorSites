import React from 'react';
import Button from '../components/Button';
import Youtube from "../components/Youtube";
import { Grid, Row} from 'react-bootstrap';
import store from '../store';

class Videos extends React.Component {
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
                {this.props.youtube ? <div>
                    <div className="video-list" >
                        <Grid>
                            <Row className="show-grid ">
                                <div className="videos-list">
                                    <Youtube {...this.props} numberOfVideos={number} />
                                </div>
                            </Row>
                        </Grid>
                    </div>
                        {number === '6' ? <Button link="/videos" text="See All Videos" type="see-all"/> : null}
                </div> : null }
            </div>
        )
    }
}

export default Videos;