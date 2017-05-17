import React from 'react';
import AboutHome from '../components/AboutHome';

class AboutHomeContainer extends React.Component {
    render(){
        return (
            <div>
                <div className="page-content">
                    <AboutHome {...this.props} />
                </div>
            </div>

        )
    }
}

export default AboutHomeContainer;