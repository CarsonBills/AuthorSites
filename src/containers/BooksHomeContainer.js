import React from 'react';
import BooksHome from '../components/BooksHome';
import SectionTitle from '../components/SectionTitle';

const BooksHomeContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <BooksHome />
                </div>
            </div>
        )
    }
});

export default BooksHomeContainer;