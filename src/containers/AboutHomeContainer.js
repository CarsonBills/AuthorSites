import React from 'react';
import AboutHome from '../components/AboutHome';
import SectionTitle from '../components/SectionTitle';

const AboutHomeContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <AboutHome/>
                </div>
            </div>

        )
    }
});

export default AboutHomeContainer;