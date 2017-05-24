import React from 'react';
import Event from '../components/Event';
import SectionTitle from '../components/SectionTitle';
import config from '../config';
import store from '../store';

class EventsContainer extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(this.props.fetchEventsData(config.author));
    }
    render(){
        return (
            <div>
                {this.props.events.length && this.props.events[0].data.pageTitle ? <div className="events">
                    <div className="page-title">
                         <SectionTitle title={this.props.events[0].data.pageTitle} /> : null }
                    </div>
                    <div className="page-content">
                        {this.props.events.length && this.props.events[0].data.sections ? this.props.events[0].data.sections.map((event, i) => <Event {...this.props.events} key={i} i={i} event={event} />) : null }
                    </div>
                </div> : null }
            </div>
        )
    }
}

export default EventsContainer;