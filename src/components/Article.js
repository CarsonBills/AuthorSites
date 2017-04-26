import React from 'react';
import { Col } from 'react-bootstrap';

const Event = React.createClass({
    render(){
        return (
            <div>
                {this.props.section.articles.map((article, i) => <div><Col xs={12} md={4} > <div className="article" ><h3 className="title">{article.articleTitle}</h3> <p className="abstract">{article.abstract}</p> <p className="publisher">{article.publisher}</p> <p className="date">{article.date}</p></div></Col></div>)}
            </div>
        )
    }
});

export default Event;