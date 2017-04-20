import React from 'react';
import Details from '../components/Details';


const DetailContainer = React.createClass({
    render(){
        const i = this.props.books.findIndex((book) => book.url === this.props.params.id);
        const book = this.props.books[i];
        return (
            <div>
                <div className="page-content">
                    <Details i={i} book={book} {...this.props} />
                </div>
            </div>
        )
    }
});

export default DetailContainer;