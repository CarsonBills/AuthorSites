import React from 'react';
import Articles from '../components/Articles';
import SectionTitle from '../components/SectionTitle';
import config from '../config';
import store from '../store';

class ArticlesContainer extends React.Component {
    constructor(props) {
        super(props);
        store.dispatch(this.props.fetchArticlesData(config.author)).then(() => {
            this.state = {
                currentSectionIndex: 0,
                currentSectionArticles: this.props.articles[0].data.sections[0].articles,
                sectionTitles: this.props.articles[0].data.sections.map((section,index)=>{
                    return section.sectionTitle
                })
            }
            this.activeSection = this.activeSection.bind(this);
            this.sort = this.sort.bind(this);
            this.forceUpdate()
        });
    }

    activeSection(index) {
        let selectedSection = this.props.articles[0].data.sections[index];
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
                    {this.props.articles.length ? <SectionTitle title={this.props.articles[0].data.pageTitle} />: null }
                </div>
                <div className="page-content">
                    {this.props.articles.length && this.state ? <Articles
                        articles={this.state.currentSectionArticles}
                        activeSection={this.activeSection}
                        activeSessionIndex={this.state.currentSectionIndex}
                        sectionTitles={this.state.sectionTitles}
                        enableSort={this.state.enableSort}
                        sort={this.sort}
                    />: null }
                </div>
            </div>

        )
    }
}

export default ArticlesContainer;