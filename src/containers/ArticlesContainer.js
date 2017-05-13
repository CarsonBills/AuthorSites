import React from 'react';
import Articles from '../components/Articles';
import SectionTitle from '../components/SectionTitle';

class ArticlesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSectionIndex: 0,
            currentSectionArticles: this.props.articles.sections[0].articles,
            sectionTitles: this.props.articles.sections.map((section,index)=>{
                return section.sectionTitle
            })
        }
        this.activeSection = this.activeSection.bind(this);
        this.sort = this.sort.bind(this);
    }

    activeSection(index) {
        let selectedSection = this.props.articles.sections[index];
        this.setState({
            currentSectionIndex: index,
            currentSectionArticles: selectedSection.articles,
            enableSort: selectedSection.enableSort
        })
    }

    sort(field) {
        let articles = this.state.currentSectionArticles.slice();
        articles.sort((a, b) => a[field].localeCompare(b[field]));
        if (field === 'date') {
            articles.reverse();
        }
        this.setState({
            currentSectionArticles: articles
        })
    }

    render() {
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title={this.props.articles.pageTitle} />
                </div>
                <div className="page-content">
                    <Articles
                        articles={this.state.currentSectionArticles}
                        activeSection={this.activeSection}
                        activeSessionIndex={this.state.currentSectionIndex}
                        sectionTitles={this.state.sectionTitles}
                        enableSort={this.state.enableSort}
                        sort={this.sort}
                    />
                </div>
            </div>

        )
    }
}

export default ArticlesContainer;