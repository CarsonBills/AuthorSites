import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Videos from '../components/Videos';

class VideosContainer extends React.Component{
    render(){
        return (
            <div className="videos-list">
                <div className="page-title">
                    <SectionTitle title={this.props.videos.pageTitle} />
                </div>
                <div className="page-content">
                    <Videos videos={this.props.videos} {...this.props} />
                </div>
            </div>
        )
    }
}

export default VideosContainer;