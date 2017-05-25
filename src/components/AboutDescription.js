import React from 'react';
import { decodeForDisplay } from '../helpers/functions'


class AboutDescription extends React.Component {

    render(){
        return (
            <div className="about-description" >
                <p>
                    {decodeForDisplay(this.props.text)}
                </p>
            </div>
        )
    }
}

export default AboutDescription;