import React from 'react';
import ReactHtmlParser from 'react-html-parser';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class DetailDescription extends React.Component {

    render(){
        return (
            <div className="detail-description" >
                <p>
                     {ReactHtmlParser(entities.decode(this.props.description))}
                </p>
            </div>
        )
    }
}

export default DetailDescription;