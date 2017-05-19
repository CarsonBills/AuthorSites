import React from 'react';
import BooksHome from '../components/BooksHome';
import Button from "../components/Button";

class BooksHomeContainer extends React.Component {
    render(){
        return (
            <div>
                <div className="page-content">
                    <div className="books-home">
                        {this.props.booksData.length ? this.props.booksData[0].data.books.map((book, i) => <BooksHome {...this.props} key={i} i={i} book={book} />) : null}
                    </div>
                    {this.props.books.length ? <Button text="See All Books" link={this.props.books[0].data.link} type="see-all"/> : null }
                </div>
            </div>
        )
    }
}

export default BooksHomeContainer;