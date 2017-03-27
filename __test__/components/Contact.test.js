import React from 'react';
import Contact from '../../src/components/Contact.js';
import {shallow} from 'enzyme';


test("Contact Component exists", () => {
    const contactComponent = shallow(
        <Contact />
    )
    expect(contactComponent.find('.section5')).toHaveLength(1);
});

test("Contact Component renders correctly", () => {
    const contactComponent = shallow(
        <Contact />
    )
    expect(contactComponent.contains(<div className="section5" style={{height: '100px', width: "100%", background: 'lightpink'}}>Contact</div>)).toEqual(true);
});


