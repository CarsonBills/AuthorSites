import React from 'react';
import Article from "../components/Article";
import Sort from "../components/Sort";
import { Grid, Row } from 'react-bootstrap';

const Articles = (props) => {
    return (
        <div className="articles-cointainer">
            <Grid>
                <Row className="show-grid">
                    <div className="sections" >
                        <div className="section-links">
                            {props.sectionTitles.map((title, index) => {
                                let linkClass = "link ";
                                linkClass += (index === props.activeSessionIndex) ? "active" : "";
                                return <div key={index} onClick={() => props.activeSection(index)} className={linkClass} >
                                    <p>{title}</p>
                                </div>
                            })
                            }
                        </div>
                        {(props.enableSort) ? <Sort sort={props.sort} /> : ""}
                    </div>
                </Row>
                <Row className="show-grid articles">
                    {props.articles.map((article, i) => <Article key={i} i={i} article={article} />)}
                </Row>
            </Grid>
        </div>
    )
}

export default Articles;