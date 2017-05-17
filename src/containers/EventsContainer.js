import React from 'react';
import Event from '../components/Event';
import SectionTitle from '../components/SectionTitle';

class EventsContainer extends React.Component {
    render(){
        return (
            <div className="events">
                <div className="page-title">
                    <SectionTitle title={this.props.events.pageTitle} />
                </div>
                <div className="page-content">
                    {this.props.events.sections.map((event, i) => <Event {...this.props.events} key={i} i={i} event={event} />)}
                </div>
            </div>
        )
    }
}

export default EventsContainer;