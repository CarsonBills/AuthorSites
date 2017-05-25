import ReactGA from 'react-ga';
import ReactHtmlParser from 'react-html-parser';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

export function gaClick(){
    ReactGA.event({
        category: this.props.link,
        action: 'Clicked Link',
    });
}

export function decodeForDisplay(text){
    return ReactHtmlParser(entities.decode(text));
}