import React from 'react';
import Button from '../components/Button';
import Article from "../components/Article";
import { Grid, Row,  DropdownButton, MenuItem } from 'react-bootstrap';

const Event = React.createClass({
    render(){
        return (
            <div className="articles-cointainer">
                <Grid>
                    <Row className="show-grid">
                        <div className="sections" >
                            <div className="section-links">
                                {this.props.articles.sections.map((section, i) => <div className="link"><p>{section.sectionTitle}</p></div>)}
                            </div>
                            <div className="sort-by">
                                <DropdownButton className="button" title='Sort By' id='dropdown-basic' >
                                    <MenuItem>Date</MenuItem>
                                    <MenuItem>Title A-Z</MenuItem>
                                    <MenuItem>Publication A-Z</MenuItem>
                                </DropdownButton>
                            </div>
                        </div>
                    </Row>
                    <Row className="show-grid articles">
                        {this.props.articles.sections.map((section, i) => <Article {...this.props.articles.sections} key={i} i={i} section={section} />)}
                    </Row>
                </Grid>
                <Button link="/videos" text="See All Articles" type="see-all"/>
            </div>
        )
    }
});

export default Event;