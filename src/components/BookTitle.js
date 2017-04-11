import React from 'react';
import {gaClick} from '../components/gaClick'

const Book = React.createClass({

    render(){
        return (
            <div className="book-title" onClick={()=>{gaClick.handleClick()}}>
                <p>{this.props.title}</p>
            </div>
        )
    }
});

export default Book;