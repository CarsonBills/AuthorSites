import React from 'react';
import Event from '../components/Event';
import SectionTitle from '../components/SectionTitle';

const EventsContainer = React.createClass({
    render(){
        return (
            <div>
                <div className="page-title">
                    <SectionTitle title="Events" />
                </div>
                <div className="page-content">
                    <Event date="Mar 12" location="New York City" eventType="Book Signing" />
                    <Event date="Mar 12" location="New York City" eventType="Book Signing"/>
                    <Event date="Mar 12" location="New York City" eventType="Book Signing"/>
                    <Event date="Mar 12" location="New York City" eventType="Book Signing"/>
                </div>
            </div>
        )
    }
});

export default EventsContainer;