import React from 'react';

const Mask = React.createClass({
    render(){
        return (
            <div className={this.props.isActive ? 'mobile-nav-mask mask-show ' : 'mobile-nav-mask'} onClick={this.props.maskClick}></div>
        )
    }
});

export default Mask;