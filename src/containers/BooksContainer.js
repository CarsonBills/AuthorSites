import React from 'react';
import Books from '../components/Books';
import SectionTitle from '../components/SectionTitle';

const BooksContainer = React.createClass({
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

export default BooksContainer;