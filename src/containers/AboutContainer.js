import React from 'react';
import About from '../components/About';
import SectionTitle from '../components/SectionTitle';

const AboutContainer = React.createClass({
    render(){
        console.log("AboutContainer", this.props.about)
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title={this.props.about.pageTitle}/>
                </div>
                <div className="page-content">
                    <About {...this.props}/>
                </div>
            </div>

        )
    }
});

export default AboutContainer;