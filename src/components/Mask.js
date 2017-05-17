import React from 'react';

class Mask extends React.Component{
    render(){
        return (
            <div className={this.props.isActive ? 'mobile-nav-mask mask-show ' : 'mobile-nav-mask'} onClick={this.props.maskClick}></div>
        )
    }
}

export default Mask;