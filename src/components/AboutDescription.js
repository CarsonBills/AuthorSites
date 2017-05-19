import React from 'react';
import ReactHtmlParser from 'react-html-parser';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class AboutDescription extends React.Component {

    render(){
        return (
            <div className="about-description" >
                <p>
                    {ReactHtmlParser(entities.decode(this.props.text))}
                </p>
            </div>
        )
    }
}

export default AboutDescription;