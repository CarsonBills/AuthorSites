import React from 'react';
import About from '../../src/components/About.js';
import {shallow} from 'enzyme';


test("About Component exists", () => {
    const aboutComponent = shallow(
        <About />
    )
    expect(aboutComponent.find('.section1')).toHaveLength(1);
});

test("About Component renders correctly", () => {
    const aboutComponent = shallow(
        <About />
    )
    expect(aboutComponent.contains(<div className="section1" style={{height: '100px', width: "100%", background: 'lightblue'}}>About</div>)).toEqual(true);
});



