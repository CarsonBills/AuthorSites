import React from 'react';


class AboutDescription extends React.Component {

    render(){
        return (
            <div className="about-description" >
                <p>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default AboutDescription;