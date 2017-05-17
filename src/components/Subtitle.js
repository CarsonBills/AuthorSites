import React from 'react';

class Subtitle extends React.Component {
    render(){
        return (
            <div>
                <div className="subtitle" >
                    <p><i className={this.props.icon} ></i>{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}

export default Subtitle;