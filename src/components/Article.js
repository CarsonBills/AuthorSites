import React from 'react';
import { Col } from 'react-bootstrap';
import { decodeForDisplay } from '../helpers/functions'

const Article = (props) => {
        return (
            <div>
                <div><Col xs={12} md={4}>
                    <div className="article" >
                        <h3 className="title">{props.article.articleTitle}</h3>
                        <p className="abstract">{decodeForDisplay(props.article.abstract)}</p>
                        <p className="publisher">{props.article.publisher}</p>
                        <p className="date">{props.article.date}</p>
                    </div>
                </Col>
                </div>
            </div>
        )
    }
export default Article;