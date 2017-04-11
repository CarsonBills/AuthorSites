import React from 'react';
import About from '../components/About';
import SectionTitle from '../components/SectionTitle';

const AboutContainer = React.createClass({
    render(){
        return (
            <div>
                <SectionTitle title="About"/>
                <About />
            </div>

        )
    }
});

export default AboutContainer;