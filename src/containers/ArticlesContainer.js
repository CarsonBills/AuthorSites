import React from 'react';
import Articles from '../components/Articles';
import SectionTitle from '../components/SectionTitle';

const ArticlesContainer = React.createClass({
    activeSection(asdf){
        this.props.articles.currentSection = asdf;
        this.setState({'articles': this.props.articles})
    },
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title={this.props.articles.pageTitle}/>
                </div>
                <div className="page-content">
                    <Articles currentSection={this.props.articles.currentSection} activeSection={this.activeSection} {...this.props}/>
                </div>
            </div>

        )
    }
});

export default ArticlesContainer;