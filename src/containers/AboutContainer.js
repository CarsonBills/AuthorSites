import React from 'react';
import About from '../components/About';
import SectionTitle from '../components/SectionTitle';
import config from "../config";
import store from '../store';

class AboutContainer extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchAboutData(config.author));
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <div className="page-title bg-grey">
                    {this.props.about.length ? <SectionTitle title={this.props.about[0].data.aboutPageText}/> : null }
                </div>
                <div className="page-content">
                   {this.props.about.length ? <About {...this.props}/> : null }
                </div>
            </div>

        )
    }
}

export default AboutContainer;