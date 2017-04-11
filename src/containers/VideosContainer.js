import React from 'react';
import Videos from '../components/Videos';
import SectionTitle from '../components/SectionTitle';

const VideosContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <Videos />
                </div>
            </div>
        )
    }
});

export default VideosContainer;