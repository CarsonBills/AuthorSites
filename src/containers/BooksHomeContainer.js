import React from 'react';
import BooksHome from '../components/BooksHome';
import Button from "../components/Button";

const BooksHomeContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <div className="books-home">
                        {this.props.books.map((book, i) => <BooksHome {...this.props} key={i} i={i} book={book} />)}
                    </div>
                    <Button text="See All Books" link="#" type="see-all"/>
                </div>
            </div>
        )
    }
});

export default BooksHomeContainer;