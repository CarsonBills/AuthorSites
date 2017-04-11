import React from 'react';
import Details from '../components/Details';


const DetailContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-content">
                    <Details />
                </div>
            </div>
        )
    }
});

export default DetailContainer;