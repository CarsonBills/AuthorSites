import React from 'react';


const AboutDescription = React.createClass({

    render(){
        return (
            <div className="about-description" >
                <p>
                    {this.props.text}
                </p>
            </div>
        )
    }
});

export default AboutDescription;