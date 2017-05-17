import React from 'react';
import About from '../components/About';
import SectionTitle from '../components/SectionTitle';

class AboutContainer extends React.Component {
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title={this.props.about.aboutPageText}/>
                </div>
                <div className="page-content">
                    <About {...this.props}/>
                </div>
            </div>

        )
    }
}

export default AboutContainer;