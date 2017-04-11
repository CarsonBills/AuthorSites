import ReactGA from 'react-ga';

export function gaClick(){
    ReactGA.event({
        category: this.props.link,
        action: 'Clicked Link',
    });
}