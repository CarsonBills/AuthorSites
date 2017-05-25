import React from 'react';
import { decodeForDisplay } from '../helpers/functions';

class DetailDescription extends React.Component {

    render(){
        return (
            <div className="detail-description" >
                <p>
                     {decodeForDisplay(this.props.description)}
                </p>
            </div>
        )
    }
}

export default DetailDescription;