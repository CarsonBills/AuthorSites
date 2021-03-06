import React from 'react';
import BooksHome from '../components/BooksHome';
import Button from "../components/Button";

class BooksHomeContainer extends React.Component {
    render(){
        return (
            <div>
                <div className="page-content">
                    <div className="books-home">
                        {this.props.booksData.length && this.props.home.length ? this.props.home[0].data.featuredBooks.map((book, i) => <BooksHome {...this.props} key={i} i={i} book={book} id={book.id}/>) : null}
                    </div>
                    {this.props.books.length ? <Button text="See All Books" link={this.props.books[0].data.pageTitle} type="see-all"/> : null }
                </div>
            </div>
        )
    }
}

export default BooksHomeContainer;