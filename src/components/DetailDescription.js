import React from 'react';


class DetailDescription extends React.Component {

    render(){
        return (
            <div className="detail-description" >
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default DetailDescription;