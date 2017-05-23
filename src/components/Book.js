import React from 'react';
import BookTitle from '../components/BookTitle';
import Button from "../components/Button";
import {gaClick} from '../helpers/functions'
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

class Book extends React.Component {

    render(){
        let book;
        if (this.props.title){
            book = (
                <Col xs={12} md={6} >
                    <div className="book" onClick={gaClick.bind(this)}>
                        <Link to={this.props.link}><img alt={this.props.title} src={this.props.book.coverImage}/></Link>
                        <BookTitle title={this.props.title}/>
                    </div>
                </Col>
            )
        } else if (this.props.buttonText){
            book = (
                <Col xs={12} md={6} >
                    <div className="book" onClick={gaClick.bind(this)}>
                        <Link to={this.props.link}><img alt="Cover" src={this.props.book.coverImage}/></Link>
                        <Button dropDownLinks={this.props.dropDownLinks} text={this.props.buttonText} link="#" type="buy"/>
                    </div>
                </Col>
            )
        } else {
            book = (               
                <div className="book" onClick={gaClick.bind(this)}>
                    <Link to={this.props.link}><img alt="Cover" src={this.props.book.coverImage}/></Link>
                </div>
            )
        }
        return (
            <div>
                { book }
            </div>
        )
    }
}

export default Book;