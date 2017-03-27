import React from 'react';
import Books from '../../src/components/Books.js';
import {shallow} from 'enzyme';

test("Books Component exists", () => {
    const booksComponent = shallow(
        <Books />
    )
    expect(booksComponent.find('.section2')).toHaveLength(1);
});

test("Books Component renders correctly", () => {
    const booksComponent = shallow(
        <Books />
    )
    expect(booksComponent.contains(<div className="section2" style={{height: '100px', width: "100%", background: 'lightyellow'}}>Books</div>)).toEqual(true);
});