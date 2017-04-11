import React from 'react';
import ReactGA from 'react-ga';


const gaClick = React.createClass({
    handleClick() {
        ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Link',
        });
    },
    
    render() {

        return (
            <div>
                <a onClick={()=>{this.handleClick()}}>Link</a>
            </div>
        );
    }
})    

export default gaClick