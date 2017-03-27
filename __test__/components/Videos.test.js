import React from 'react';
import Videos from '../../src/components/Videos.js';
import {shallow} from 'enzyme';

test("Videos Component exists", () => {
    const videosComponent = shallow(
        <Videos />
    )
    expect(videosComponent.find('.section4')).toHaveLength(1);
});

test("Videos Component renders correctly", () => {
    const videosComponent = shallow(
        <Videos />
    )
    expect(videosComponent.contains(<div className="section4" style={{height: '100px', width: "100%", background: 'lightgreen'}}>Videos</div>)).toEqual(true);
});