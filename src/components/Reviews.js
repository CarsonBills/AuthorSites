import React from 'react';
import Review from "../components/Review";
import { Grid, Row, Col } from 'react-bootstrap';

const Books = React.createClass({
    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <div className="reviews-grid">
                            <Review text={["From Here to Eternity", <br/>, "asdhj af aewrfg aserg res g", <br/>, "rghusker re es gse gs erg sergrse"]} reviewer="Jane Doe" publication="Booklist"/>
                            <Review text={["From Here to Eternity", <br/>, "asdhj af aewrfg aserg res g", <br/>, "rghusker re es gse gs erg sergrse"]} reviewer="Jane Doe" publication="Booklist"/>
                            <Review text={["From Here to Eternity", <br/>, "asdhj af aewrfg aserg res g", <br/>, "rghusker re es gse gs erg sergrse"]} reviewer="Jane Doe" publication="Booklist"/>
                            <Review text={["From Here to Eternity", <br/>, "asdhj af aewrfg aserg res g", <br/>, "rghusker re es gse gs erg sergrse"]} reviewer="Jane Doe" publication="Booklist"/>                            
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default Books;