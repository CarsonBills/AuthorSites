import React from 'react';
import About from '../components/About';
import SectionTitle from '../components/SectionTitle';

const AboutContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title="About Caitlin Doughty"/>
                </div>
                <div className="page-content">
                    <About />
                </div>
            </div>

        )
    }
});

export default AboutContainer;