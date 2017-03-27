import React from 'react';
import Events from '../../src/components/Events.js';
import {shallow} from 'enzyme';


test("Contact Component exists", () => {
    const contactComponent = shallow(
        <Events />
    )
    expect(contactComponent.find('.section3')).toHaveLength(1);
});

test("Events Component renders correctly", () => {
    const contactComponent = shallow(
        <Events />
    )
    expect(contactComponent.contains(<div className="section3" style={{height: '100px', width: "100%", background: 'orchid'}}>Events</div>)).toEqual(true);
});

