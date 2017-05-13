import React from 'react';
import AboutHome from '../components/AboutHome';

const AboutHomeContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <AboutHome {...this.props} />
                </div>
            </div>

        )
    }
});

export default AboutHomeContainer;