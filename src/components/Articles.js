import React from 'react';
import Button from '../components/Button';
import Article from "../components/Article";
import Sort from "../components/Sort";
import { Grid, Row } from 'react-bootstrap';

const Event = React.createClass({
    sortBy(field){
        var unsortedarticles = this.props.articles.sections[this.props.articles.currentSection].articles,
            sorted = unsortedarticles.sort((a, b) => a[field].localeCompare(b[field]));
        this.props.articles.sections[this.props.articles.currentSection].articles = sorted;
        if ( field === 'date'){
            sorted.reverse()
        }
        this.setState({
            articles: this.props.articles
        })
    },
    makeActive(section){
        this.props.activeSection(section);
    },
    render(){
        return (
            <div className="articles-cointainer">
                <Grid>
                    <Row className="show-grid">
                        <div className="sections" >
                            <div className="section-links">
                                {this.props.articles.sectionTitles.map((title, i) => <div onClick={this.makeActive.bind(this, title)}className="link"><p>{title}</p></div>)}
                            </div>
                            <Sort sortBy={this.sortBy} articles={this.props.articles}/>
                        </div>
                    </Row>
                    <Row className="show-grid articles">
                        {this.props.articles.sections[this.props.articles.currentSection].articles.map((article, i) => <Article {...this.props} key={i} i={i} article={article} />)}
                    </Row>
                </Grid>
                <Button link="/videos" text="See All Articles" type="see-all"/>
            </div>
        )
    }
});

export default Event;