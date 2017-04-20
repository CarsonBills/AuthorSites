import React from 'react';
import BookCover from '../components/Book';
import SectionTitle from '../components/SectionTitle';
import Button from "../components/Button";
import TextTruncate from 'react-text-truncate'; 
import { Grid, Row, Col } from 'react-bootstrap';

const BooksHome = React.createClass({
    render(){
        return (
            <div className="books-home">
                <Grid>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div className="books-home-text">
                                    <div className="section-title"> 
                                        <SectionTitle title="From Here to Eternity" subtitle="Traveling the World to Find the Good Death"/>
                                    </div>
                                    <TextTruncate 
                                        className="detail-description"
                                        line={3}
                                        truncateText="…"
                                        text="Fascinated by our pervasive terror of dead bodies.<br/>
                                            mortician Caitlin Doughty set out to discover how <br/>
                                            other cultures care for their dead. in rural Indonesia<br/>
                                            she observes a man clean and dress his grandfather&#39;s <br/>
                                            mummified body. Grandpa&#39;s mummy has lived in the<br/>
                                            family home for two years. where the family has<br/>
                                            maintained warm and respectful relationship. She<br/>
                                            meets Bolician motitas (cigarette-smoking wish- <br/>
                                            granting human skulls). and introduces us to a Japa-<br/>
                                            nese kotsuage. In which relatives use chopsticks to <br/>
                                            pluck their loved-ones bones from cremation ashes.<br/>"
                                        textTruncateChild={<a href="#">Read more</a>}
                                        />
                                    <Button text="Buy Now" link="#" type="buy"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="books-home-cover">
                                    <BookCover link="/books/from-here-to-eternity"/>
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row className="show-grid">
                        <div>
                            <Col xs={12} md={6}>
                                <div className="books-home-cover">
                                    <BookCover link="/books/smoke-gets-in-your-eyes"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="books-home-text">
                                    <div className="section-title"> 
                                        <SectionTitle title="Smoke Gets In Your Eyes" subtitle="And Other Lessons from the Crematory"/>
                                    </div>
                                    <TextTruncate
                                        className="detail-description"
                                        line={3}
                                        truncateText="…"
                                        text="Fascinated by our pervasive terror of dead bodies.<br/>
                                            mortician Caitlin Doughty set out to discover how <br/>
                                            other cultures care for their dead. in rural Indonesia<br/>
                                            she observes a man clean and dress his grandfather&#39;s <br/>
                                            mummified body. Grandpa&#39;s mummy has lived in the<br/>
                                            family home for two years. where the family has<br/>
                                            maintained warm and respectful relationship. She<br/>
                                            meets Bolician motitas (cigarette-smoking wish- <br/>
                                            granting human skulls). and introduces us to a Japa-<br/>
                                            nese kotsuage. In which relatives use chopsticks to <br/>
                                            pluck their loved-ones bones from cremation ashes.<br/>"
                                        textTruncateChild={<a href="#">Read more</a>}
                                        />
                                    <Button text="Buy Now" link="#" type="buy"/>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
                <Button text="See All Books" link="#" type="see-all"/>
            </div>
        )
    }
});

export default BooksHome;