import React from 'react';
import {gaClick} from '../components/gaClick'

class Book extends React.Component {

    render(){
        return (
            <div className="book-title" onClick={()=>{gaClick.handleClick()}}>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Book;