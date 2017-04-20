import React from 'react';


const DetailDescription = React.createClass({

    render(){
        return (
            <div className="detail-description" >
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
});

export default DetailDescription;