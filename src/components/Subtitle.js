import React from 'react';

const Subtitle = React.createClass({
    render(){
        return (
            <div>
                <div className="subtitle" >
                    <p><i className={this.props.icon} ></i>{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
});

export default Subtitle;