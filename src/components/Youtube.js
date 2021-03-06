import React from 'react';
import Video from "../components/Video";


class Youtube extends React.Component{
    render(){
        var numberOfVideos = this.props.numberOfVideos
        return (
            <div>
                {this.props.youtube[0].items.slice(0, numberOfVideos).map((video, i) =>  <Video {...this.props.youtube[0].items} key={i} i={i} video={video} />)}
            </div>
        )
    }
}

export default Youtube;