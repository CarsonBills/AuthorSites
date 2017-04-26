import React from 'react';
import Articles from '../components/Articles';
import SectionTitle from '../components/SectionTitle';

const AboutContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title={this.props.articles.pageTitle}/>
                </div>
                <div className="page-content">
                    <Articles {...this.props}/>
                </div>
            </div>

        )
    }
});

export default AboutContainer;