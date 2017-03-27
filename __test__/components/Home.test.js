import React from 'react';
import Home from '../../src/components/Home.js';
import {shallow} from 'enzyme';


test("Home Page renders five contituent components", () => {
    const homeComponent = shallow(
        <Home />
    )
    expect(homeComponent.find('div').children()).toHaveLength(5);
});
