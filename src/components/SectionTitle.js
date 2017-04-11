import React from 'react';

const SectionTitle = React.createClass({
    render(){
        return (
            <div>
                <p className="overline"></p>
                <h2>{this.props.title}</h2>
                <h3>{this.props.subtitle}</h3>
                <p className="underline"></p>
            </div>
        )
    }
});

export default SectionTitle;