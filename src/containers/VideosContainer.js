import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Videos from '../components/Videos';
import config from '../config';
import store from '../store'

class VideosContainer extends React.Component{
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchVideosData(config.author));
    }
    render(){
        console.log("VIDEOS", this.props)
        return (
            <div className="videos-list">
                <div className="page-title">
                    {this.props.videos.length ? <SectionTitle title={this.props.videos[0].data.pageTitle} /> : null }
                </div>
                <div className="page-content">
                    {this.props.videos.length ? <Videos videos={this.props.videos} {...this.props} /> : null }
                </div>
            </div>
        )
    }
}

export default VideosContainer;