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
        return (
             <div>
                {this.props.videos.length && this.props.videos[0].data.pageTitle ? <div className="videos-list">
                    <div className="page-title">
                        <SectionTitle title={this.props.videos[0].data.pageTitle} />
                    </div>
                    <div className="page-content">
                        {this.props.videos[0].data.sections ? <Videos videos={this.props.videos} {...this.props} /> : null }
                    </div>
                </div> : null }
            </div>
        )
    }
}

export default VideosContainer;