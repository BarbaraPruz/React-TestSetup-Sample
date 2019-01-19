import React from 'react';
import { mount } from 'enzyme';  // mount() is full DOM rendering; enzyme doc at airbnb.io/enzyme

import Root from 'root';
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach( () => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach( () => {
    wrapped.unmount();
});

it ('has a text area and 2 buttons', () => {
    expect (wrapped.find('textarea').length).toEqual(1);
    expect (wrapped.find('button').length).toEqual(2);    
}); 

describe('the text area', () => {
    beforeEach ( () => {
        // simulate is enzyme method.  2nd arg is object merged into event for onChange
        wrapped.find('textarea').simulate('change', {
            target: { value:'new comment'}
        });
        wrapped.update();  // force re-render because React setState is async
    });
    it ('has a text area that user can type in', () => {
        expect (wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it ('clears text area after user presses submit button', () => {    
        wrapped.find('form').simulate('submit');
        wrapped.update();  
        expect (wrapped.find('textarea').prop('value')).toEqual('');
    });
});