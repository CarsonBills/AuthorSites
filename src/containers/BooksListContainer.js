import React from 'react';
import Books from '../components/Books';
import SectionTitle from '../components/SectionTitle';

const BooksListContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-title bg-grey">
                    <SectionTitle title="Books"/>
                </div>
                <div className="page-content">
                    <Books />
                </div>
            </div>
        )
    }
});

export default BooksListContainer;