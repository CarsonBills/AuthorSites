import React from 'react';
import AboutHome from '../components/AboutHome';
import config from "../config";
import store from '../store';

class AboutHomeContainer extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchAboutData(config.author));
    }
    render(){
        return (
            <div>
                <div className="page-content">
                    {this.props.about.length ? <AboutHome {...this.props} /> : null }
                </div>
            </div>

        )
    }
}

export default AboutHomeContainer;