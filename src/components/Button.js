import React from 'react';
import {gaClick} from '../components/gaClick';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const Book = React.createClass({

    render(){
        return (
            <Link to={this.props.link} onClick={()=>{gaClick.handleClick()}}>
                <div className="button" >{this.props.text}</div>
            </Link>
            
        )
    }
});

export default Book;