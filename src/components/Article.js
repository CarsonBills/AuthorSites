import React from 'react';
import { Col } from 'react-bootstrap';

const Article = React.createClass({
    render(){
        console.log("Article", this.props)
        return (
            <div>
                <div><Col xs={12} md={4}> <div className="article" ><h3 className="title">{this.props.article.articleTitle}</h3> <p className="abstract">{this.props.article.abstract}</p> <p className="publisher">{this.props.article.publisher}</p> <p className="date">{this.props.article.date}</p></div></Col></div>
            </div>
        )
    }
});

export default Article;