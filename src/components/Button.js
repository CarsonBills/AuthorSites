import React from 'react';
import {gaClick} from '../components/gaClick';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const Book = React.createClass({

    render(){
        let button;
        if (this.props.type === "buy"){
            button = (
                <Link to={this.props.link} onClick={()=>{gaClick.handleClick()}}>
                    <div className="button" >{this.props.text}</div>
                </Link> 
            )
        } else if (this.props.type === "see-all") {
            button = (
                <Link to={this.props.link} onClick={()=>{gaClick.handleClick()}}>
                    <div className="see-all" >{this.props.text} <i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                </Link>                 
            )
        }
        return (
            <div>
                { button }
            </div>
        )
    }
});

export default Book;